import React from "react";
import Link from "gatsby-link";
import styled from "react-emotion";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

const ContactPage = () => (
  <Container>
    <NavBar>
      <NavLink to="/">
        <FontAwesomeIcon
          icon={["far", "window-close"]}
          size="2x"
          color="#064614"
        />
      </NavLink>
    </NavBar>
    <Content>
      <ContactForm>
        <h4>Contact</h4>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="4" />
          </div>
          <ul>
            <li>
              <input type="submit" value="Send Message" />
            </li>
            <li>
              <input type="reset" value="Reset" />
            </li>
          </ul>
        </form>
      </ContactForm>
      <Social>
        <h4>Directions</h4>
        <SocialLinkBar>
          <SocialLink href="https://www.facebook.com/Port-Alfred-Driving-Range-1242566729088163/">
            <FontAwesomeIcon
              icon={["fab", "facebook-square"]}
              size="2x"
              color="#064614"
            />
          </SocialLink>

          <SocialLink href="#">
            <FontAwesomeIcon
              icon={["fab", "instagram"]}
              size="2x"
              color="#064614"
            />
          </SocialLink>

          <SocialLink href="tel:+27735077260‬">
            <FontAwesomeIcon icon="phone-square" size="2x" color="#064614" />
          </SocialLink>
        </SocialLinkBar>
      </Social>
    </Content>
  </Container>
);

export default ContactPage;

const Container = styled.div`
  padding: 0;
  min-width: 320px;
  width: 60vw;
  color: #064614;
  background-color: #f0fff085;
  border: 3px solid #064614;
  border-radius: 2px;
  font: 18px "'Georgia Bold', Times, serif";
  display: grid;
`;

const Content = styled.section`
  margin: 0;
  padding: 0.5rem;
  display: grid;
  grid-template-columns: repeat(2 minmax(150px, max-content));
  grid-column-gap: 0.5rem;
`;

const ContactForm = styled.article`
  grid-row: 1;
  grid-column: 1;
  border-right: 3px solid #064614;
`;

const Social = styled.article`
  grid-row: 1;
  grid-column: 2;
  display: grid;
`;

const SocialLinkBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const SocialLink = styled.a`
  color: #064614;
  font: 16px "'Georgia Bold', Times, serif";
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
