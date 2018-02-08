import React, { Component } from 'react';
import API from '../../services/api';
import AJAX from '../../services/ajax';
import Form from './form';

export default class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      country: '',
      password: '',
      password_confirmation: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  formField(fieldName, password = false) {
    return (
      <div className="col-md-6 form-group">
        <label>{fieldName}</label>
        <input
          type={password ? 'password' : 'text'}
          className="form-control form-control-lg rounded-0"
          name={fieldName}
          value={this.state[fieldName]}
          onChange={e => this.handleInput(fieldName, e.target.value)}
        />
      </div>
    );
  }

  handleInput(fieldName, value) {
    this.setState({ [fieldName]: value });
  }

  async handleSubmit() {
    const url = API.registrationUrl;

    const {
      first_name, last_name, email, phone, address, city, state, zip, country,
      password, password_confirmation,
    } = this.state;
    const data = {};

    data.user = {
      first_name,
      last_name,
      email,
      phone,
      address,
      city,
      state,
      zip,
      country,
      password,
      password_confirmation,
    };

    const response = await AJAX.post(url, data);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-center text-white mb-4">Sign Up</h2>
            <div className="row">
              <div className="col-md-12 mx-auto">
                <span className="anchor" />
                <div className="card rounded-0">
                  <Form
                    component={this}
                    handleInput={this.handleInput}
                    handleSubmit={this.handleSubmit}
                    formData={this.state}
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

