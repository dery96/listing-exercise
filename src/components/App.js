import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';

import Header from './Header';
import Supplier from './Supplier';

class App extends Component {
  render() {
    return (
      <Container className="App">
        <Row>
          <Header />
          <Supplier />
        </Row>
      </Container>
    );
  }
}

export default App;
