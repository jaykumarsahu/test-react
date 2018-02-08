import React from 'react';

const FormField = ({ fieldName, formData, handleInput, type='text' }) => (
  <div className="col-md-6 form-group">
    <label>{fieldName}</label>
    <input
      type={type}
      className="form-control form-control-lg rounded-0"
      name={fieldName}
      value={formData[fieldName]}
      onChange={(e) => handleInput(fieldName, e.target.value)} />
  </div>
)

export const form = (props) => {

  return (
    <div className="card-body">
      <form className="form">

        <div className="row">
          <FormField
            fieldName = "first_name"
            formData={props.formData}
            handleInput={props.handleInput}
          />
          <FormField
            fieldName = "last_name"
            formData={props.formData}
            handleInput={props.handleInput}
          />
        </div>

        <div className="row">
          <FormField
            fieldName = "email"
            formData={props.formData}
            handleInput={props.handleInput}
          />

          <FormField
            fieldName = "phone"
            formData={props.formData}
            handleInput={props.handleInput}
          />
        </div>

        <div className="form-group">
          <label>Address</label>
          <textarea
            className="form-control form-control-lg rounded-0"
            name="address"
            value={props.address}
            onChange={(e) => props.handleInput('address', e.target.value)} />
        </div>

        <div className="row">

          <FormField
            fieldName = "city"
            formData={props.formData}
            handleInput={props.handleInput}
          />
          <FormField
            fieldName = "state"
            formData={props.formData}
            handleInput={props.handleInput}
          />
        </div>

        <div className="row">

          <FormField
            fieldName = "zip"
            formData={props.formData}
            handleInput={props.handleInput}
          />
          <FormField
            fieldName = "country"
            formData={props.formData}
            handleInput={props.handleInput}
          />
        </div>

        <div className="row">
          <FormField
            fieldName = "password"
            formData={props.formData}
            handleInput={props.handleInput}
            type = "password"
          />
          <FormField
            fieldName = "password_confirmation"
            formData={props.formData}
            handleInput={props.handleInput}
            type = "password"
          />
        </div>

        <div
          className="btn btn-success btn-lg float-right"
          onClick={props.handleSubmit}
        >Save
        </div>
      </form>
    </div>
  );
}

export default form;

