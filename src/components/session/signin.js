import React, { Component } from 'react';
import axios from 'axios';
import API from '../../services/api';
import { Redirect } from 'react-router';

export default class SessionIn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "abc@jay.com",
      password: "12345678",
    };
  }

  handleInput(fieldName, value) {
    let hash = {};
    hash[fieldName] = value;
    this.setState(hash);
  }

  handleSubmit(event) {
    const url = API.loginUrl();
    const data = { email: this.state.email, password: this.state.password }
    axios.post(url, data)
    .then( response => response.data ).then( (data) => {
      localStorage.setItem('sessionToken', data.auth_token);
      this.props.history.push("/");
    })
    .catch(function (error_response) {
      if (error_response.response){
        console.log(error_response.response.data.error )
      }else{
        console.log(error_response.message)
      }
    });
  }

  login_form(){
    let { email, password } = this.state;

    return(
      <div className="card-body">
        <form className="form">
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control form-control-lg rounded-0"
              name="email"
              value={email}
              onChange={(e) => this.handleInput('email', e.target.value)} />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control form-control-lg rounded-0"
              name="password"
              value={password}
              onChange={(e) => this.handleInput('password', e.target.value)} />
          </div>

          <input
            type="Login"
            className="btn btn-success btn-lg float-right"
            value="Submit"
            onClick={this.handleSubmit.bind(this)} />
        </form>
      </div>
    )
  }

  render() {
    let sessionToken = localStorage.getItem('sessionToken');
    if(sessionToken) {
      return <Redirect to='/'/>;
    }else{
      return (
        <div className="container py-5">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-center text-white mb-4">Login</h2>
              <div className="row">
                <div className="col-md-6 mx-auto">
                  <span className="anchor"></span>
                  <div className="card rounded-0">
                    { this.login_form() }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}


