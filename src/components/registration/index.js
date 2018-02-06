import React, { Component } from 'react';
import axios from 'axios';
import API from '../../services/api';

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

  formField(fieldName, password=false) {
    return(
      <div className="col-md-6 form-group">
        <label>{fieldName}</label>
        <input
          type={ password ? 'password' : 'text' }
          className="form-control form-control-lg rounded-0"
          name={fieldName}
          value={this.state[fieldName]}
          onChange={(e) => this.handleInput(fieldName, e.target.value)} />
      </div>
    );
  }

  handleInput(fieldName, value) {
    let hash = {};
    hash[fieldName] = value;
    this.setState(hash);
  }

  handleSubmit(event) {
    const url = API.registrationUrl();
    debugger

    const {
      first_name, last_name, email, phone, address, city, state, zip, country,
      password, password_confirmation
    } = this.state, data = {};

    data['user'] = {
      first_name, last_name, email, phone, address, city, state, zip, country,
      password, password_confirmation
    }

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
    return(
      <div className="card-body">
        <form className="form">

          <div className="row">
            { this.formField("first_name") }
            { this.formField("last_name") }
          </div>

          <div className="row">
            { this.formField("email") }
            { this.formField("phone") }
          </div>

          <div className="form-group">
            <label>Address</label>
            <textarea
              className="form-control form-control-lg rounded-0"
              name="address"
              value={this.state.address}
              onChange={(e) => this.handleInput('address', e.target.value)} />
          </div>

          <div className="row">
            { this.formField("city") }
            { this.formField("state") }
          </div>

          <div className="row">
            { this.formField("zip") }
            { this.formField("country") }
          </div>

          <div className="row">
            { this.formField("password", true) }
            { this.formField("password_confirmation", true) }
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
            <h2 className="text-center text-white mb-4">Sign Up</h2>
            <div className="row">
              <div className="col-md-12 mx-auto">
                <span className="anchor"></span>
                <div className="card rounded-0">
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


