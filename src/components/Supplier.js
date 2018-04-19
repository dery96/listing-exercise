import React, { Component } from 'react';

import Search from './Search';
import SupplierListing from './SupplierListing';
import Pagination from './Pagination';

class Supplier extends Component {
  render() {
    return (
      <div>
        <Search />
        <SupplierListing />
        <Pagination />
      </div>
    );
  }
}

export default Supplier;
