import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { value: undefined };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
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
}

export default Search;
