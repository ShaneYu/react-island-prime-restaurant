import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink, useRouteMatch } from 'react-router-dom';

import Logo from '../../logo/Logo';
import useScrollPosition from '../../use-scroll-position/useScrollPosition';

const Navigation = () => {
  const { y: scrollPositionY } = useScrollPosition();
  const isMenuRoute = useRouteMatch({ exact: true, path: '/' });

  const determineBgColor = () => {
    return !isMenuRoute || scrollPositionY > 445
      ? 'white'
      : 'black-transparent';
  };

  return (
    <Navbar
      id="headerNavbar"
      collapseOnSelect
      bg={determineBgColor()}
      variant="light"
      expand="md"
    >
      <Navbar.Brand data-testid="headerNavbarBrand">
        <Link to="/">
          <Logo />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle
        data-testid="headerNavbarToggle"
        aria-controls="main-navbar-nav"
      >
        <span className="icon-bar top-bar" />
        <span className="icon-bar middle-bar" />
        <span className="icon-bar bottom-bar" />
      </Navbar.Toggle>
      <Navbar.Collapse data-testid="headerNavbarCollapse" id="main-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link
            data-testid="headerNavbarHomeLink"
            as={NavLink}
            to="/"
            exact
            activeClassName="active"
          >
            Menu
          </Nav.Link>
          <Nav.Link
            data-testid="headerNavbarManagementLink"
            as={NavLink}
            to="/management"
            exact
            activeClassName="active"
          >
            Management
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
