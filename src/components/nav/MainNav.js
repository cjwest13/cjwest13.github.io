import React from 'react';
import '../../styles/Nav.css';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import SocialLinks from './SocialLinks';
import Logo from './Logo';

const MainNav = () => {
  const NavbarContainer = styled.div`
    position: sticky;
    width: 100%;
    display: flex;
    align-items: center;
    z-index: 1;
    top: 0%;
    width: 100%;
    margin: auto;
    padding: 0% 3%;
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
    background-color: #ffffff;
    box-shadow: 0px 0px 10px 5px #b7b7a4;

    @media (prefers-color-scheme: dark) {
    background-color: #000000;
    box-shadow: none;
  `;

  const LeftSection = styled.div`
    display: flex;
  `;

  const MiddleSection = styled.div`
    display: flex;
    flex: 2;
    height: 100%;
    justify-content: center;
  `;

  const RightSection = styled.div`
    display: flex;
  `;

  return (
    <NavbarContainer>
      <LeftSection>
        <SocialLinks />
      </LeftSection>
      <MiddleSection>
        <Logo />
      </MiddleSection>
      <RightSection>
        <ul id="menu">
          <li>
            <Link to="/">Resume</Link>
          </li>
          <li>
            <Link to="press">Press</Link>
          </li>
          <li>
            <Link to="/aboutme">Contact</Link>
          </li>
        </ul>
      </RightSection>
    </NavbarContainer>
  )
}

export default MainNav;