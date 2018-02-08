import React, { Component } from 'react';
import { Redirect } from 'react-router';

export default class SignOut extends Component {
  constructor(props) {
    super(props);
    localStorage.removeItem('sessionToken');
  }

  render() {
    return <Redirect to="/signin" />;
  }
}

