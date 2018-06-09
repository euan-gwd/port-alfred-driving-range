import React from "react";
import Link from "gatsby-link";
import styled, { css } from "react-emotion";
import logo from "../images/logo.png";

const IndexPage = () => (
  <Container>
    <MainLogo>
      <div className={ImgBackDrop} />
      <img src={logo} alt="logo" width="300" height="197" />
    </MainLogo>
    <Intro>
      <p>
        Nestled amongst the rolling hills of the sleepy town of Port Alfred,
        lies a driving range that shares its namesake. Come join us for a great
        day out, bring your own golf clubs, hit some golf balls. <br /> Golf
        Clubs are also available for hire as well.
      </p>
      <p>
        Our conversant and neighborly golf pro Colin Mavuso is on hand to
        provide conversation and guidance. Private lessons are available on
        request.
      </p>
      <p>
        The Port Alfred Driving Range is conveniently located behind the
        RoseHill Mall.
      </p>
    </Intro>

    <NavBar>
      <NavLink to="/page-2/">Services</NavLink>
      <NavLink to="/page-2/">Contact</NavLink>
    </NavBar>
  </Container>
);

export default IndexPage;

const Container = styled.div`
  padding: 0;
  min-width: 320px;
  width: 60vw;
  display: grid;
  color: #064614;
  font: 18px "'Georgia Bold', Times, serif";
`;

const MainLogo = styled.div`
  margin: 0;
  padding: 0;
  justify-self: center;
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
`;

const Intro = styled.div`
  background-color: #f0fff085;
  border: 3px solid #064614;
  border-radius: 2px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  text-align: center;
  margin: 0;
  padding: 0.5rem;
`;

const NavBar = styled.nav`
  color: #064614;
  background-color: #f0fff075;
  border-top: none;
  border-bottom: 3px solid #064614;
  border-left: 3px solid #064614;
  border-right: 3px solid #064614;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const NavLink = styled(Link)`
  text-align: center;
  color: #064614;
  font: small-caps bold 18px "'Georgia Bold', Times, serif";
  padding: 0.5rem;

  :first-of-type {
    border-right: 3px solid #064614;
  }
`;
