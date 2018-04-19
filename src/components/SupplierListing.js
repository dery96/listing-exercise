import React from 'react';
import { Container, Col, Row, Button } from 'reactstrap';

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
      <div className="pound-rating"> Rating {rating} </div>
      <div className="reference"> {reference} </div>
      <div className="value"> {`£${value}`}</div>
    </div>
  );
}

function SupplierListing({ props }) {
  return (
    <Col md={12} s className="">
      <div className="listing-area">
        <LabelColumn />
        <ListingColumn
          name={'Supplier name'}
          rating={3}
          reference={'499778'}
          value={'1,600'}
        />
        <ListingColumn
          name={'Supplier name'}
          rating={3}
          reference={'499778'}
          value={'1,600'}
        />
        <ListingColumn
          name={'Supplier name'}
          rating={3}
          reference={'499778'}
          value={'1,600'}
        />
        <ListingColumn
          name={'Supplier name'}
          rating={3}
          reference={'499778'}
          value={'1,600'}
        />
        <ListingColumn
          name={'Supplier name'}
          rating={3}
          reference={'499778'}
          value={'1,600'}
        />
        <ListingColumn
          name={'Supplier name'}
          rating={3}
          reference={'499778'}
          value={'1,600'}
        />
      </div>
    </Col>
  );
}

export default SupplierListing;
