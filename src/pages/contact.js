import React from "react";
import Link from "gatsby-link";
import styled from "react-emotion";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { MapContainer } from "../components/MapContainer.js";

const ContactPage = () => (
  <Container>
    <NavBar>
      <Heading>Contact</Heading>
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
        <Form>
          <FormField>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </FormField>
          <FormField>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </FormField>
          <FormField>
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" />
          </FormField>
          <FormField>
            <input type="submit" value="Send Message" />
            <input type="reset" value="Reset" />
          </FormField>
        </Form>
      </ContactForm>
      <Social>
        <MapContainer
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `200px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
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

const Heading = styled.h2`
  color: #064614;
  padding: 0.5rem 0 0;
  font: "'Georgia Bold', Times, serif";
  justify-self: center;
  align-self: center;
`;

const Content = styled.section`
  margin: 0;
  padding: 0 0.5rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(150px, 1fr));
  grid-column-gap: 0.5rem;
`;

const ContactForm = styled.article`
  grid-row: 1;
  grid-column: 1;
  border-right: 3px solid #064614;
  padding: 0 0.5rem;
`;

const Form = styled.form``;
const FormField = styled.div`
  display: flex;
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
  padding: 0.5rem 0;
`;

const SocialLink = styled.a`
  color: #064614;
  font: 16px "'Georgia Bold', Times, serif";
`;

const NavBar = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const NavLink = styled(Link)`
  text-align: right;
  color: #064614;
  font: bold 16px "'Georgia Bold', Times, serif";
  text-transform: uppercase;
  padding: 0.25rem 0.5rem 0;

  :hover {
    color: #678c68;
  }
`;
