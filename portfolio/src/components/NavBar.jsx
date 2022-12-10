import React from 'react';
import { Nav, StyledLink } from '../styles';

function NavBar() {
  return (
    <Nav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/about">About-me</StyledLink>
      <StyledLink to="/skills">Skills</StyledLink>
      <StyledLink to="/projects">Projects</StyledLink>
      <StyledLink to="/contact">Contact</StyledLink>
    </Nav>
  );
}

export default NavBar;
