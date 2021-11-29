import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Burger from '../burger/Burger';
import Menu from '../burger/Menu';
import FocusLock from 'react-focus-lock';
import { useOnClickOutside } from "../../hooks";

const MobileLinks = () => {

  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  return (
      <div ref={node} style={{ padding: '10px 0px'}}>
        <Logo />
        <FocusLock disabled={!open}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
        </FocusLock>
      </div>
  )
}

export default MobileLinks;