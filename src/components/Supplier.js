import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';

import SupplierListing from './SupplierListing';

const left = '<';
const right = '>';

class Supplier extends Component {
  constructor(props) {
    super(props);
    this.state = {
      payments: undefined,
      pagination: undefined,
      querySearch: { name: 'query', value: '' },
      queryPage: { name: 'page', value: '' },
      queryRating: { name: 'rating', value: '' },
      current: undefined
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderPagination = this.renderPagination.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  async fetchData() {
    const { queryPage, querySearch, queryRating } = this.state;
    let queries = '';

    if (queryPage.value || querySearch.value || queryRating.value) {
      [queryPage, querySearch, queryRating].map(query => {
        if (query.value) {
          if (queries) {
            queries += query.value ? `&${query.name}=${query.value}` : '';
          } else {
            queries += query.value ? `?${query.name}=${query.value}` : '';
          }
        }
      });
    }
    const url = 'http://test-api.kuria.tshdev.io/' + queries;
    try {
      const response = await fetch(url);
      const answer = await response.json();
      await this.setState({
        payments: answer.payments,
        pagination: answer.pagination
      });
    } catch (err) {
      await this.setState({
        payments: undefined,
        pagination: undefined
      });
    }
  }

  renderSearch() {
    return (
      <div className="col search-area">
        <input
          type="text"
          placeholder="Search suppliers"
          className="search-input"
          value={this.state.querySearch.value}
          onChange={e => {
            this.setState({
              querySearch: { name: 'query', value: e.target.value }
            });
          }}
          onKeyPress={async e => {
            if (e.key === 'Enter') {
              await this.setState({ queryPage: { name: 'page', value: '' } });
              this.fetchData();
            }
          }}
        />
        <div className="select-bk">
          <select
            value={this.state.queryRating.value}
            onChange={e =>
              this.setState({
                queryRating: { name: 'rating', value: e.target.value }
              })
            }
            placeholder="Select pound rating"
          >
            <option value={''}>Select pound rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <button
          className="btn"
          onClick={async () => {
            await this.setState({
              querySearch: { name: 'query', value: '' },
              queryPage: { name: 'page', value: '' },
              queryRating: { name: 'rating', value: '' }
            });
            this.fetchData();
          }}
        >
          Reset
        </button>
        <button
          type="sumbit"
          className="btn btn-blue"
          onClick={async () => {
            await this.setState({ queryPage: { name: 'page', value: '' } });
            this.fetchData();
          }}
        >
          Search
        </button>
      </div>
    );
  }

  renderPagination() {
    return (
      <Col md={12} className="pagination">
        <div className="buttons">
          {this.state.pagination && this.state.pagination.left ? (
            <button
              className="btn"
              onClick={async () => {
                await this.setState({
                  queryPage: {
                    name: 'page',
                    value: parseInt(this.state.current) - 1
                  },
                  current: parseInt(this.state.current) - 1
                });
                this.fetchData();
              }}
            >
              {left}
            </button>
          ) : (
            ''
          )}
          {this.state.pagination
            ? Object.entries(this.state.pagination.links)
                .filter(link => {
                  if (
                    parseInt(this.state.pagination.current) === 0 ||
                    parseInt(this.state.pagination.current) === 1
                  ) {
                    if (4 > parseInt(link[0])) {
                      return true;
                    }
                  } else if (
                    parseInt(this.state.pagination.current) - 2 <=
                      parseInt(link[0]) &&
                    parseInt(this.state.pagination.current) + 2 >
                      parseInt(link[0])
                  ) {
                    return true;
                  }
                  return false;
                })
                .map((link, index) => {
                  return (
                    <button
                      className={
                        parseInt(this.state.pagination.current) ===
                        parseInt(link[0])
                          ? 'btn btn-active'
                          : 'btn'
                      }
                      key={index}
                      value={link[0]}
                      onClick={async e => {
                        await this.setState({
                          queryPage: { name: 'page', value: e.target.value },
                          current: e.target.value
                        });
                        this.fetchData();
                      }}
                    >
                      {link[0]}
                    </button>
                  );
                })
            : ''}
          {this.state.pagination && this.state.pagination.right ? (
            <button
              className="btn"
              onClick={async () => {
                await this.setState({
                  queryPage: {
                    name: 'page',
                    value: this.state.current
                      ? parseInt(this.state.current) + 1
                      : '1'
                  },
                  current: this.state.current
                    ? parseInt(this.state.current) + 1
                    : '1'
                });
                this.fetchData();
              }}
            >
              {right}
            </button>
          ) : (
            ''
          )}
        </div>
      </Col>
    );
  }

  render() {
    return (
      <Col md={12}>
        <Row>
          {this.renderSearch()}
          <SupplierListing payments={this.state.payments} />
          {this.renderPagination()}
        </Row>
      </Col>
    );
  }
}

export default Supplier;
