import React from "react";
import Link from "gatsby-link";
import styled from "react-emotion";

const ContactPage = () => (
  <Container>
    <NavBar>
      <NavLink to="/">back</NavLink>
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
        <p>R150 per session (Private Coaching Lessons) </p>
      </article>
    </Content>
  </Container>
);

export default ContactPage;

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

const NavBar = styled.nav`
  display: grid;
`;

const NavLink = styled(Link)`
  text-align: right;
  color: #064614;
  font: bold 16px "'Georgia Bold', Times, serif";
  text-transform: uppercase;
  padding: 0.5rem;

  :hover {
    color: #678c68;
  }
`;
