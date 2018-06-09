import React from "react";
import Link from "gatsby-link";
import styled from "react-emotion";

const ServicesPage = () => (
  <Container>
    <Content>
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
        Rosehill Mall.
      </p>
    </Content>
    <NavBar>
      <NavLink to="/">back to the homepage</NavLink>
    </NavBar>
  </Container>
);

export default ServicesPage;

const Container = styled.div`
  padding: 0;
  min-width: 320px;
  width: 60vw;
  display: grid;
  color: #064614;
  font: 18px "'Georgia Bold', Times, serif";
`;

const Content = styled.section`
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
`;

const NavLink = styled(Link)`
  text-align: center;
  color: #064614;
  font: small-caps bold 18px "'Georgia Bold', Times, serif";
  padding: 0.5rem;

  :hover {
    color: #678c68;
  }
`;
