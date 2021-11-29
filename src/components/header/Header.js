import Aos from 'aos';
import React, { useEffect } from 'react';
// import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
// import { Link, NavLink } from 'react-router-dom';
import '../../styles/Header.css';
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, []);

  return (
    <div className="header" >
      <div className="headerContainer">
        <div data-aos="fade-down" id="header-text">
          <h1 className="subtitle">@CliftonWestJr</h1>
          <h1 data-aos="fade-down" className="large-title">Clifton West Jr</h1>
        </div>
      </div>
    </div>
  )
}

export default Header;