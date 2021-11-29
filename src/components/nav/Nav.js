import React from 'react';
import { useMediaQuery } from 'react-responsive';
import '../../styles/Nav.css';
import MainNav from './MainNav';
import { DeviceSize } from '../responsive/DeviceSize';
import MobileLinks from './MobileLinks';
    
const Nav = () => {
  
  const isMobile = useMediaQuery(
    {
      maxWidth: DeviceSize.mobile 
    }
  )

  return (
    !isMobile ? <MainNav/> : <MobileLinks/>
  )
};

export default Nav;