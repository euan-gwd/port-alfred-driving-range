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
        <StyledIcon icon={["far", "window-close"]} size="2x" color="#064614" />
      </NavLink>
    </NavBar>
    <Content>
      <ContactFormWrapper>
        <Form>
          <FormField>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" />
          </FormField>
          <FormField>
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" id="email" />
          </FormField>
          <FormField>
            <label htmlFor="message">Message:</label>
            <textarea name="message" id="message" />
          </FormField>
          <FormActions>
            <input type="submit" value="Send Message" />
            <input type="reset" value="Reset" />
          </FormActions>
        </Form>
      </ContactFormWrapper>
      <Social>
        <MapContainer
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `200px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
        <SocialLinkBar>
          <SocialLink href="https://www.facebook.com/Port-Alfred-Driving-Range-1242566729088163/">
            <StyledIcon
              icon={["fab", "facebook-square"]}
              size="2x"
              color="#064614"
            />
          </SocialLink>
          <SocialLink href="#">
            <StyledIcon icon={["fab", "instagram"]} size="2x" color="#064614" />
          </SocialLink>
          <SocialLink href="tel:+27735077260‬">
            <StyledIcon icon="phone-square" size="2x" color="#064614" />
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

const NavBar = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Heading = styled.h2`
  color: #064614;
  padding: 0.5rem 0 0;
  justify-self: center;
  align-self: center;
  text-transform: uppercase;
  text-decoration: underline;
`;

const NavLink = styled(Link)`
  text-align: right;
  color: #064614;
  font: 16px "'Georgia Bold', Times, serif";
  text-transform: uppercase;
  padding: 0.25rem 0.5rem 0;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  :hover {
    color: #678c68;
  }
`;

const Content = styled.section`
  margin: 0;
  padding: 0 0.5rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(150px, 1fr));
  grid-column-gap: 0.5rem;
`;

const ContactFormWrapper = styled.article`
  grid-row: 1;
  grid-column: 1;
  border-right: 3px solid #064614;
  padding: 0 0.5rem 0.5rem;
`;

const Form = styled.form`
  display: grid;
  grid-template-rows: repeat(4 minmax(150px, 1fr));
  grid-row-gap: 0.5rem;
`;

const FormField = styled.div`
  display: grid;
  font: 18px "'Georgia Bold', Times, serif";
  color: #064614;

  label {
    grid-row: 1;
    margin: 0.5rem 0 -0.2rem;
    font: bold 18px "'Georgia Bold', Times, serif";
  }

  input {
    grid-row: 2;
    color: #064614;
    outline: none;

    :focus {
      color: #678c68;
      border: 2px solid #678c68;
    }
  }

  textarea {
    color: #064614;
    outline: none;

    :focus {
      color: #678c68;
      border: 2px solid #678c68;
    }
  }
`;

const FormActions = styled.div`
  display: flex;
  justify-content: space-around;

  input[type="submit"],
  input[type="reset"] {
    font: bold 18px "'Georgia Bold', Times, serif";
    color: #064614;
    text-transform: uppercase;
    background-color: transparent;
    border: 3px solid transparent;
    margin: 0;
    padding: 0.125rem 0.25rem 0;

    :hover {
      color: #678c68;
      text-decoration: underline;
    }
  }
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
  font: 18px "'Georgia Bold', Times, serif";

  :hover {
    color: #678c68;
  }
`;
