import React, { Component } from 'react';
import API from '../../services/api';
import AJAX from '../../services/ajax';
import LoginForm from './login-form';
import { alertError, alertSuccess } from '../../pages/alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import isUserSignedIn from '../../hooks/user-checker'

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(fieldName, value) {
    this.props.onChange(fieldName, value);
  }

  componentWillMount() {
    isUserSignedIn(this.props.history);
  }

  async handleSubmit() {
    const url = API.loginUrl;
    const response = await AJAX.post(url, { ...this.props.loginData });
    if (response && response.status === 'FAILED') { alertError(response.error); }
    if (response && response.auth_token) {
      localStorage.setItem('sessionToken', response.auth_token);
      this.props.history.push('/');
      alertSuccess('User has been signed in successfully.');
    }
  }

  render() {
    const { email, password } = this.props.loginData;
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
                    email={email}
                    password={password}
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

const mapStateToProps = state => ({ loginData: state.loginData });

const mapDispatchToProps = dispatch => ({
  onChange: (fieldName, value) => dispatch({ type: 'CHANGE', fieldName, value }),
});

SignIn.contextTypes = {
  loginData: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
