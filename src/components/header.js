import React from "react";
import styled, { css } from "react-emotion";
import logo from "../images/logo.png";

const Header = () => (
  <MainLogo>
    <div className={ImgBackDrop} />
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
    width: calc(300px / 1.25);
    height: calc(197px / 1.25);

    @media screen and (min-width: 480px) {
      width: 300px;
      height: 197px;
    }
  }
`;

const ImgBackDrop = css`
  background-color: #f0fff085;
  margin: 12px 0 0 3px;
  width: calc(290px / 1.25);
  height: calc(177px / 1.25);
  grid-row: 1;
  grid-column: 1 / span 2;
  z-index: 2;

  @media screen and (min-width: 480px) {
    margin: 15px 0 0 5px;
    width: 290px;
    height: 177px;
  }
`;
