import React, { Component } from 'react';
import axios from 'axios';
import API from '../../services/api';
import { Table } from 'react-bootstrap';
import { Redirect } from 'react-router';

export default class Products extends Component {

  constructor(props) {
    super(props);
    this.state = { products: [] };
    this.sessionToken = localStorage.getItem('sessionToken');
  }

  componentWillMount() {
    if (this.sessionToken){
      axios.get(API.ProductIndexUrl(), {
        'headers': { 'Authorization': this.sessionToken }
      })
      .then((resp) => resp.data)
      .then((data) => {
        if (data.status === "success"){
          this.setState({products: data.products});
        }
      })
      .catch(function(error) {
        console.log(error);
      });
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


