import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';

import SupplierListing from './SupplierListing';
import PoundRating from './PoundRating';

const left = '<';
const right = '>';

class Supplier extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: undefined,
      payments: [
        {
          payment_supplier: 'ANCHOR TRUST',
          payment_ref: '499599',
          payment_cost_rating: '1',
          payment_amount: '674.80'
        },
        {
          payment_supplier: 'ANCHOR TRUST',
          payment_ref: '500394',
          payment_cost_rating: '3',
          payment_amount: '3053.84'
        },
        {
          payment_supplier: 'ANCHOR TRUST',
          payment_ref: '500395',
          payment_cost_rating: '5',
          payment_amount: '15650.00'
        },
        {
          payment_supplier: 'ANDREWS WASTE MANAGEMENT',
          payment_ref: '500396',
          payment_cost_rating: '2',
          payment_amount: '1222.22'
        },
        {
          payment_supplier: 'AQUADITION LTD',
          payment_ref: '1141260',
          payment_cost_rating: '1',
          payment_amount: '528.75'
        }
      ]
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderPagination = this.renderPagination.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    alert('Your favorite flavor is: ' + this.state.value);
    e.preventDefault();
  }

  renderSearch() {
    return (
      <form className="col search-area" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Search suppliers"
          className="search-input"
        />
        <div className="select-bk">
          <select
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Select pound rating"
            ya
          >
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </div>

        <button
          className="btn"
          onClick={() => this.setState({ value: undefined })}
        >
          Reset
        </button>
        <button
          className="btn btn-blue"
          onClick={() => this.setState({ value: undefined })}
        >
          Search
        </button>
      </form>
    );
  }

  renderPagination() {
    return (
      <Col md={12} className="pagination">
        <div className="buttons">
          <button className="btn">{left}</button>
          {/* {() => return this.state.data.pagination.links.map((link, index) => {
			  return <button className='btn' key={index}>{link.name}</button>			  
		  });
		  } */}
          <button className="btn">{right}</button>
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
