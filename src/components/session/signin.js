import React, { Component } from 'react';
import API from '../../services/api';
import AJAX from '../../services/ajax';
import { Redirect } from 'react-router';
import LoginForm from './login-form';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'abc@kk.com',
      password: '12345678',
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(fieldName, value) {
    this.setState({ [fieldName]: value });
  }

  async handleSubmit() {
    const url = API.loginUrl;
    const data = { email: this.state.email, password: this.state.password };
    const response = await AJAX.post(url, data);

    if (response.auth_token) {
      localStorage.setItem('sessionToken', response.auth_token);
      this.props.history.push('/');
    }
  }

  render() {
    const sessionToken = localStorage.getItem('sessionToken');
    if (sessionToken) {
      return <Redirect to="/" />;
    }
    return (
      <div className="container py-5">
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-center text-white mb-4">Login</h2>
            <div className="row">
              <div className="col-md-6 mx-auto">
                <span className="anchor" />
                <div className="card rounded-0">
                  <LoginForm
                    email={this.state.email}
                    password={this.state.password}
                    handleInput={this.handleInput}
                    handleSubmit={this.handleSubmit}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

