import React from "react";
import styled, { css } from "react-emotion";
import logo from "../images/logo.png";

const Header = () => (
  <MainLogo>
    <div className={ImgBackDrop} />
    <img src={logo} alt="logo" width="300" height="197" />
  </MainLogo>
);

export default Header;

const MainLogo = styled.div`
  margin: 0;
  padding: 0;
  justify-self: center;
  align-self: center;
  display: grid;
  grid-template-rows: 200px;
  grid-template-columns: repeat(2, 150px);

  img {
    grid-column: 1 / span 2;
    grid-row: 1;
    z-index: 3;
  }
`;

const ImgBackDrop = css`
  background-color: #f0fff085;
  margin: 15px 0 0 5px;
  width: 290px;
  height: 177px;
  grid-row: 1;
  grid-column: 1 / span 2;
  z-index: 2;
`;
