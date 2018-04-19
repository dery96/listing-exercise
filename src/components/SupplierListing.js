import React from 'react';
import PropTypes from 'prop-types';
import { Container, Col, Row, Button } from 'reactstrap';

import PoundRating from './PoundRating';

function LabelColumn() {
  return (
    <div className="column label">
      <div className="supplier">Supplier</div>
      <div className="pound-rating">Pound rating</div>
      <div className="reference">Reference</div>
      <div className="value">Value</div>
    </div>
  );
}

function ListingColumn({ name, rating, reference, value }) {
  return (
    <div className="column">
      <div className="supplier">{name}</div>
      <div className="pound-rating">
        <PoundRating rate={rating} />
      </div>
      <div className="reference"> {reference} </div>
      <div className="value"> {`£${value}`}</div>
    </div>
  );
}

function SupplierListing({ payments }) {
  return (
    <Col md={12} s className="">
      <div className="listing-area">
        <LabelColumn />
        {payments ? (
          payments.map((payment, index) => {
            return (
              <ListingColumn
                name={payment.payment_supplier}
                rating={payment.payment_cost_rating}
                reference={payment.payment_ref}
                value={payment.payment_amount}
              />
            );
          })
        ) : (
          <div className="column">
            <div className="reference">There is nothing to show!</div>
          </div>
        )}
      </div>
    </Col>
  );
}
PoundRating.propTypes = {
  rate: PropTypes.number.isRequired
};

export default SupplierListing;
