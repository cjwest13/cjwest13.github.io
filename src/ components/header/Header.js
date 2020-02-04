import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom';
import '../../styles/Header.css';
import DropdownItem from 'react-bootstrap/DropdownItem';

const Header = () => {
  return (
    <header>
      <Navbar fluid collapseOnSelect expand="lg" bg="light" variant="light" >
      <Navbar.Brand>
        <Link to="/" className="home">Clifton West</Link>
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/">
              <Nav.Link className="items">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/resume">
              <Nav.Link className="items">Resume</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Projects" id="basic-nav-dropdown">
              <LinkContainer to="/capstone">
                <DropdownItem>Capstone</DropdownItem>
              </LinkContainer>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Header;