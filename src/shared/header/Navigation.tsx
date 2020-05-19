import './Navigation.scss';

import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Navigation = () => (
  <Navbar collapseOnSelect variant="dark" bg="primary" expand="lg" sticky="top">
    <Navbar.Brand>
      <Link to="/" className="text-light">
        Island Prime Restauarant
      </Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="main-navbar-nav">
      <span className="icon-bar top-bar" />
      <span className="icon-bar middle-bar" />
      <span className="icon-bar bottom-bar" />
    </Navbar.Toggle>
    <Navbar.Collapse id="main-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link as={NavLink} to="/" exact activeClassName="active">
          Home
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;
