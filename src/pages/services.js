import React from "react";
import Link from "gatsby-link";
import styled from "react-emotion";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

const ServicesPage = () => (
  <Container>
    <NavBar>
      <Heading>Services</Heading>
      <NavLink to="/">
        <StyledIcon icon={["far", "window-close"]} size="2x" color="#064614" />
      </NavLink>
    </NavBar>
    <Content>
      <article>
        <h3>Operating Hours</h3>
        <h4>Summer</h4>
        <p>
          Monday - Saturday <span>09:00 - 18:00</span>
        </p>
        <p>
          Sunday <span>09:00 - 16:00</span>
        </p>
      </article>
      <article>
        <h4>Winter</h4>
        <p>
          Monday - Saturday <span>09:00 - 16:00</span>
        </p>
        <p>
          Sunday <span>09:00 - 14:00</span>
        </p>
      </article>
      <article>
        <h3>Prices</h3>
        <p>R30 per tray (50 balls)</p>
        <p>R150 per lesson (Private Coaching)</p>
      </article>
    </Content>
  </Container>
);

export default ServicesPage;

const Container = styled.div`
  padding: 0;
  min-width: 320px;
  width: 60vw;
  display: grid;
  color: #064614;
  background-color: #f0fff085;
  border: 3px solid #064614;
  border-radius: 2px;
  font: 18px "'Georgia Bold', Times, serif";
`;

const NavBar = styled.nav`
  display: grid;
  grid-template-columns: 1fr 0.02fr;
  margin: 0;
`;

const Heading = styled.h2`
  color: #064614;
  padding: 0.5rem 0 0 0;
  text-align: center;
  align-self: center;
  text-transform: uppercase;
  text-decoration: underline;
`;

const NavLink = styled(Link)`
  text-align: right;
  color: #064614;
  font: bold 16px "'Georgia Bold', Times, serif";
  text-transform: uppercase;
  padding: 0.5rem;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  :hover {
    color: #678c68;
  }
`;

const Content = styled.section`
  text-align: center;
  margin: 0;
  padding: 0.5rem;

  h3 {
    padding: 0.25rem 0;
    text-transform: uppercase;
  }

  p {
    line-height: 0.5rem;
  }
`;
