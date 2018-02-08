import React, { Component } from 'react';
import API from '../../services/api';
import { Table } from 'react-bootstrap';
import { Redirect } from 'react-router';
import AJAX from '../../services/ajax';

export default class Products extends Component {

  constructor(props) {
    super(props);
    this.state = { products: [] };
    this.sessionToken = localStorage.getItem('sessionToken');
  }

  async componentWillMount() {
    if (this.sessionToken){
      const header = { 'headers': { 'Authorization': this.sessionToken } };
      const response = await AJAX.get(API.ProductIndexUrl, header);
      if (response.status === "success"){
        this.setState({products: response.products});
      }
    }
  }

  productRow(product){
    return(
      <tr key={product.id}>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.description}</td>
        <td>{product.price}</td>
      </tr>
    );
  }

  render() {
    if(this.sessionToken) {
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
            {
              this.state.products.map((product) => {
                return (this.productRow(product));
              })
            }
          </tbody>
        </Table>
      );
    }else{
      return <Redirect to='/signin'/>;
    }
  }
}


