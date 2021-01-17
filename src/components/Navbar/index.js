import React from "react";
import { Nav, NavLink, NavIcon, Bars } from "./NavbarElements";

const Navbar = () => {
  return (
    <React.Fragment>
      <Nav>
        <NavLink to="/">Pizza</NavLink>
        <NavIcon>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </React.Fragment>
  );
};

export default Navbar;
