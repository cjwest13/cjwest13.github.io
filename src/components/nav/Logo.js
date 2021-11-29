import React from 'react';
import { useMediaQuery } from 'react-responsive';
import lightLogo from '../../assets/logo-light.png';
import darkLogo from '../../assets/logo-dark.png';
import '../../styles/Nav.css';

const Logo = () => {
  const systemPrefersDark = useMediaQuery(
    {
      query: '(prefers-color-scheme: dark)'
    }
  );

  const systemPrefersLight = useMediaQuery(
    {
      query: '(prefers-color-scheme: light)'
    }
  );

  return (
    <div className="logo">
      <a href="https://cliftonwestjr.com">{systemPrefersDark && <img src={darkLogo} alt="Logo of Clifton West" />}
      {systemPrefersLight && <img src={lightLogo} alt="Logo of Clifton West" />}</a>
    </div>
  )
}

export default Logo;