import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">Test-React</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>

    <Navbar.Collapse>
      <RightNav />
    </Navbar.Collapse>
  </Navbar>
);

const NavLink = ({ name, path }) => (
  <NavItem componentClass={Link} href={path} to={path}>
    {name}
  </NavItem>
);

const RightNav = () => {
  const sessionToken = localStorage.getItem('sessionToken');

  if (sessionToken) {
    return (
      <Nav pullRight>
        <NavLink name="Sign Out" path="/signout" />
      </Nav>
    );
  }
  return (
    <Nav pullRight>
      <NavLink path="/signin" name="Sign in" />
      <NavLink path="/signup" name="Sign up" />
    </Nav>
  );
};

export default Header;
