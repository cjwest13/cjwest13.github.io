import React from 'react';
import '../../styles/Nav.css';
import { Github, Instagram, Facebook, Twitter, Linkedin } from '@icons-pack/react-simple-icons';

const SocialLinks = () => (
  <ul id="social-media">
    <li>
      <a href="https://twitter.com/cliftonwestjr"><Twitter alt="Twitter" title="Twitter" className="icon" /></a>
    </li>
    <li>
      <a href="https://www.instagram.com/cliftonwestjr"><Instagram alt="Instagram" title="Instagram" className="icon" /></a>
    </li>
    <li>
      <a href="https://www.facebook.com/cliftonwestjr"><Facebook alt="Facebook" title="Facebook" className="icon" /></a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/clifton-west-jr13"><Linkedin alt="Linkedin" title="Linkedin" className="icon" /></a>
    </li>
    <li>
      <a href="https://github.com/cjwest13"><Github alt="Github" title="Github" className="icon" /></a>
    </li>
  </ul>
)

export default SocialLinks;