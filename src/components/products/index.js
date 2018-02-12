import React, { Component } from 'react';
import API from '../../services/api';
import { Table } from 'react-bootstrap';
import { Redirect } from 'react-router';
import AJAX from '../../services/ajax';
import { alertError } from '../../pages/alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Products extends Component {
  constructor(props) {
    super(props);
    this.sessionToken = localStorage.getItem('sessionToken');
  }

  async componentWillMount() {
    if (this.sessionToken) {
      const header = { headers: { Authorization: this.sessionToken } };
      const response = await AJAX.get(API.ProductIndexUrl, header);
      if (response.status === 'SUCCESS') {
        this.props.updateProducts(response.products);
      }
    }
  }

  productRow(product) {
    return (
      <tr key={product.id}>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.description}</td>
        <td>{product.price}</td>
      </tr>
    );
  }

  render() {
    if (this.sessionToken) {
      return (
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            { this.props.products.map(product => (this.productRow(product))) }
          </tbody>
        </Table>
      );
    }
    alertError('Please sign in first.');
    return <Redirect to="/signin" />;
  }
}

const mapStateToProps = state => ({ products: state.products });

const mapDispatchToProps = dispatch => ({
  updateProducts: value => dispatch({ type: 'UPDATE', value }),
});

Products.contextTypes = {
  products: PropTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
