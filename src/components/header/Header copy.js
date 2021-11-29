import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import '../../styles/Header.css';

const Header = () => {
  return (
    <header>
      <Navbar fluid collapseOnSelect expand="lg" bg="light" variant="light" fixed='top'>
        <Navbar.Brand as={Link} className="home">Clifton West</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} to='/' className="items">Home</Nav.Link>
            <Nav.Link as={NavLink} to='/resume' className="items">Resume</Nav.Link>
            <NavDropdown title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to='/capstone'>Capstone</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Header;