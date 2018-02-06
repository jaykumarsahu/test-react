import React from 'react';
import { Alert } from 'react-bootstrap';

const Header = (text) => (
  <Alert bsStyle="warning">
    {text}
  </Alert>;
);

export default Header;