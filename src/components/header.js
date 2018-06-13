import React from "react";
import styled from "react-emotion";
import logo from "../images/logo-alt.png";

const Header = () => <MainLogo src={logo} alt="logo" />;

export default Header;

const MainLogo = styled.img`
  margin: 0 0 1rem;
  padding: 0;
  justify-self: center;
  align-self: center;
  z-index: 3;
  width: 300px;
  height: 197px;

  @media screen and (max-width: 480px) {
    margin: 0 0 0.25rem;
    width: calc(300px / 1.75);
    height: calc(197px / 1.75);
  }
`;
