import { combineReducers } from 'redux';

const initialState = {
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

const formData = (stateData = initialState, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...stateData,
        [action.fieldName]: action.value,
      };
    default:
      return stateData;
  }
};

const abc = {
  email: 'user@example.com',
  password: '12345678',
};

const loginData = (stateData = abc, action) => {
  console.log(action);
  switch (action.type) {
    case 'CHANGE':
      return {
        ...stateData,
        [action.fieldName]: action.value,
      };
    default:
      return stateData;
  }
};

const reducers = {
  formData,
  loginData,

};

export default combineReducers(reducers);
