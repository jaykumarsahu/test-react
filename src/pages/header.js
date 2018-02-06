import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
// import logo from './logo.svg';

// const Header = () => (
//   <Navbar inverse collapseOnSelect>
//     <Navbar.Header>
//       <Navbar.Brand>
//         <a href="/">Test-React</a>
//       </Navbar.Brand>
//       <Navbar.Toggle />
//     </Navbar.Header>

//     <Navbar.Collapse>
//       <Nav>
//         <NavItem href="#">
//           Home
//         </NavItem>
//         <NavItem href="#">
//           About
//         </NavItem>
//       </Nav>

//       {rightNav()}

//     </Navbar.Collapse>
//   </Navbar>
// );

const Header = () => (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">Test-React</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>

    <Navbar.Collapse>
      {rightNav()}
    </Navbar.Collapse>
  </Navbar>
);







const rightNav = () => {
  let sessionToken = localStorage.getItem('sessionToken');

  if(sessionToken){
    return(
      <Nav pullRight>
        <NavItem href="/signout">
          Sign Out
        </NavItem>
      </Nav>
    );
  }else{
    return(
      <Nav pullRight>
        <NavItem href="/signin">
          Sign in
        </NavItem>
        <NavItem href="/signup">
          Sign up
        </NavItem>
      </Nav>
    );
  }
}

export default Header;