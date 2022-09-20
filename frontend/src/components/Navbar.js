import React from 'react';
import { NavbarContainer, NavLink } from '../styles/Navbar.style';
function Navbar() {
  return (
    <NavbarContainer>
      <NavLink to='/activities'>Activities</NavLink>
      <NavLink to='/students'>Students</NavLink>
    </NavbarContainer>
  );
}

export default Navbar;
