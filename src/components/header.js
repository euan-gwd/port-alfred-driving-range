import React from "react";
import styled from "react-emotion";
import logo from "../images/logo-alt.png";

const Header = () => (
  <MainLogo>
    <img src={logo} alt="logo" />
  </MainLogo>
);

export default Header;

const MainLogo = styled.div`
  margin: 0;
  padding: 0;
  justify-self: center;
  align-self: center;
  display: grid;

  img {
    grid-column: 1 / span 2;
    grid-row: 1;
    z-index: 3;
    width: 300px;
    height: 197px;
  }
`;
