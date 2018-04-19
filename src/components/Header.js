import React from 'react';
import { Container, Col, Row, Button } from 'reactstrap';

function Line({}) {
  return <div className="line-break" />;
}

function Header({ props }) {
  return (
    <header className="col-12">
      <Row>
        <h1 className="col header-title">Where your money goes</h1>
      </Row>

      <Row>
        <span className="col header-description">
          Payments made by Chichester Distric Council to individual suppliers
          with a value over £500 made with October
        </span>
      </Row>

      <Row>
        <Col>
          <hr className="line-break" />
        </Col>
      </Row>
    </header>
  );
}

export default Header;
