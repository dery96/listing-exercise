import React, { Component } from 'react';
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import PropTypes from 'prop-types';

import Rating from './Rating';
import closeSvg from '../assets/img/close.svg';

class Payment extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    return (
      <div className="column">
        <div className="supplier">
          <span onClick={this.toggle} id={'pop-' + this.props.reference}>
            {this.props.name}
          </span>
        </div>
        <div className="pound-rating">
          <Rating rating={this.props.rating} />
        </div>
        <div className="reference"> {this.props.reference} </div>
        <div className="value"> {`£${this.props.value}`}</div>
        <Popover
          placement="auto"
          isOpen={this.state.popoverOpen}
          target={'pop-' + this.props.reference}
          toggle={this.toggle}
        >
          <PopoverHeader className="popover-header">
            <span style={{ fontSize: 14 }}>{this.props.popUpTitle}</span>

            <button
              className="btn-close"
              onClick={async () => await this.setState({ popoverOpen: false })}
            >
              <img src={closeSvg} className="icon" alt="close-icon" />
            </button>
          </PopoverHeader>
          <PopoverBody>{this.props.popUpDesc}</PopoverBody>
        </Popover>
      </div>
    );
  }
}

Payment.propTypes = {
  name: PropTypes.string.isRequired,
  reference: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  popUpTitle: PropTypes.string.isRequired,
  popUpDesc: PropTypes.string.isRequired
};

export default Payment;
