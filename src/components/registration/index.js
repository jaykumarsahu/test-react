import React, { Component } from 'react';
import axios from 'axios';

export default class Registration extends Component {

  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      country: "",
      password: "",
      password_confirmation: ""
    };
  }

  handleInput(fieldName, value) {
    let hash = {};
    hash[fieldName] = value;
    this.setState(hash);
  }

  handleSubmit(event) {
    const url = "http://localhost:3001/api/v1/sessions/login";
    const data = { email: this.state.email, password: this.state.password }
    axios.post(url, data)
    .then( response => response.data ).then( data => console.log(data))
    .catch(function (error_response) {
      if (error_response.response){
        console.log(error_response.response.data.error )
      }else{
        console.log(error_response.message)
      }
    });
  }

  registration_form(){
    const {
      first_name, last_name, email, phone, address, city, state, zip, country,
      password, password_confirmation
    } = this.state;

    return(
      <div className="card-body">
        <form className="form">

          <div className="row">

            <div className="col-md-6 form-group">
              <label>First Name</label>
              <input
                type="text"
                className="form-control form-control-lg rounded-0"
                name="first_name"
                value={first_name}
                onChange={(e) => this.handleInput('first_name', e.target.value)} />
            </div>

            <div className="col-md-6 form-group">
              <label>Last Name</label>
              <input
                type="text"
                className="form-control form-control-lg rounded-0"
                name="last_name"
                value={last_name}
                onChange={(e) => this.handleInput('last_name', e.target.value)} />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 form-group">
              <label>Email</label>
              <input
                type="text"
                className="form-control form-control-lg rounded-0"
                name="email"
                value={email}
                onChange={(e) => this.handleInput('email', e.target.value)} />
            </div>

            <div className="col-md-6 form-group">
              <label>Phone</label>
              <input
                type="text"
                className="form-control form-control-lg rounded-0"
                name="phone"
                value={phone}
                onChange={(e) => this.handleInput('phone', e.target.value)} />
            </div>
          </div>

          <div className="form-group">
            <label>Address</label>
            <textarea
              className="form-control form-control-lg rounded-0"
              name="address"
              value={address}
              onChange={(e) => this.handleInput('address', e.target.value)} />
          </div>

          <div className="row">
            <div className="col-md-6 form-group">
              <label>City</label>
              <input
                type="text"
                className="form-control form-control-lg rounded-0"
                name="city"
                value={city}
                onChange={(e) => this.handleInput('city', e.target.value)} />
            </div>

            <div className="col-md-6 form-group">
              <label>State</label>
              <input
                type="text"
                className="form-control form-control-lg rounded-0"
                name="state"
                value={state}
                onChange={(e) => this.handleInput('state', e.target.value)} />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 form-group">
              <label>Zip</label>
              <input
                type="text"
                className="form-control form-control-lg rounded-0"
                name="zip"
                value={zip}
                onChange={(e) => this.handleInput('zip', e.target.value)} />
            </div>

            <div className="col-md-6 form-group">
              <label>Country</label>
              <input
                type="text"
                className="form-control form-control-lg rounded-0"
                name="country"
                value={country}
                onChange={(e) => this.handleInput('country', e.target.value)} />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control form-control-lg rounded-0"
                name="password"
                value={password}
                onChange={(e) => this.handleInput('password', e.target.value)} />
            </div>

            <div className="col-md-6 form-group">
              <label>Password Confirmation</label>
              <input
                type="password"
                className="form-control form-control-lg rounded-0"
                name="password_confirmation"
                value={password_confirmation}
                onChange={(e) => this.handleInput('password_confirmation', e.target.value)} />
            </div>
          </div>

          <input
            type="Save"
            className="btn btn-success btn-lg float-right"
            value="Submit"
            onClick={this.handleSubmit.bind(this)} />
        </form>
      </div>
    )
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-center text-white mb-4">Sign UP</h2>
            <div className="row">
              <div className="col-md-12 mx-auto">
                <span className="anchor"></span>
                <div className="card rounded-0">
                  <div className="card-header">
                    <h3 className="mb-0">Sign UP</h3>
                  </div>
                  { this.registration_form() }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


