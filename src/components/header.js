import React from "react";
import Link from "gatsby-link";
import styled from "react-emotion";

const Header = () => (
  <NavBar>
    <NavMenu>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </NavMenu>
  </NavBar>
);

export default Header;

const NavBar = styled.nav`
  max-width: 1000px;
  margin: 0 auto;
  background-color: wheat;
`;

const NavMenu = styled.ul`
  border: 1px solid black;
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
`;
