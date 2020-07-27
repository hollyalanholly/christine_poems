import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    <Menu {...props}>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/poems">
        Poems
      </a>

      <a className="menu-item" href="/contact_me">
        Contact Me 
        </a>
      
    </Menu>
  );
};