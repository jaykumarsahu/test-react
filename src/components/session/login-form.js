import React from 'react';

export const loginForm = ({email, password, handleInput, handleSubmit}) => (
  <div className="card-body">
    <form className="form">
      <div className="form-group">
        <label>Username</label>
        <input
          type="text"
          className="form-control form-control-lg rounded-0"
          name="email"
          value={email}
          onChange={(e) => handleInput('email', e.target.value)} />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control form-control-lg rounded-0"
          name="password"
          value={password}
          onChange={(e) => handleInput('password', e.target.value)} />
      </div>

      <div
        className="btn btn-success btn-lg float-right"
        onClick={handleSubmit}
      >
        Login
      </div>
    </form>
  </div>
);

export default loginForm;
