import React from 'react';
import { Col } from 'reactstrap';

import Payment from './Payment';

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

function SupplierListing({ payments }) {
  return (
    <Col md={12} className="">
      <div className="listing-area">
        <LabelColumn />
        {payments ? (
          payments.map((payment, index) => {
            return (
              <Payment
                key={index}
                name={payment.payment_supplier}
                rating={payment.payment_cost_rating}
                reference={payment.payment_ref}
                value={payment.payment_amount}
                popUpTitle={`Payment: ${payment.payment_supplier}`}
                popUpDesc="this is payment descrption there you can find some useful information about it."
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

export default SupplierListing;
