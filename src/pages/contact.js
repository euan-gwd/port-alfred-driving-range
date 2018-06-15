import React, { Component } from "react";
import ReactDOM from "react-dom";
import Link from "gatsby-link";
import styled from "react-emotion";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import Img from "gatsby-image";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class ContactPage extends Component {
  state = {
    name: "",
    email: "",
    message: "",
  };

  componentDidMount = () => {
    this.container.animate(
      [
        { transform: "translateY(-800px)", opacity: 0 },
        { transform: "translateY(0px)", opacity: 1 },
      ],
      {
        duration: 300,
        fill: "forwards",
        easing: "ease-in-out",
        iterations: 1,
      }
    );
  };

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    return (
      <Container
        ref={container => (this.container = ReactDOM.findDOMNode(container))}
      >
        <NavBar>
          <Heading>Contact</Heading>
          <NavLink to="/">
            <StyledIcon
              icon={["far", "window-close"]}
              size="2x"
              color="#064614"
            />
          </NavLink>
        </NavBar>
        <PageContent>
          <ContactFormWrapper>
            <Form
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={this.handleSubmit}
            >
              <FormField>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                  id="name"
                  required
                />
              </FormField>
              <FormField>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                  id="email"
                  required
                />
              </FormField>
              <FormField>
                <label htmlFor="message">Message:</label>
                <textarea
                  name="message"
                  value={message}
                  onChange={this.handleChange}
                  id="message"
                />
              </FormField>
              <input type="hidden" name="form-name" value="contact" required />
              <FormActions>
                <input type="submit" value="Send Message" />
                <input type="reset" value="Reset" />
              </FormActions>
            </Form>
          </ContactFormWrapper>
          <SocialWrapper>
            <Img
              style={{
                width: "100%",
                height: "35.5vh",
              }}
              sizes={this.props.data.map.sizes}
            />
            <span>R72, Port Alfred, 6170</span>
            <SocialLinkBar>
              <SocialLink href="https://www.facebook.com/Port-Alfred-Driving-Range-1242566729088163/">
                <StyledIcon
                  icon={["fab", "facebook-square"]}
                  size="2x"
                  color="#064614"
                />
              </SocialLink>
              <SocialLink href="#">
                <StyledIcon
                  icon={["fab", "instagram"]}
                  size="2x"
                  color="#064614"
                />
              </SocialLink>
              <SocialLink href="tel: +27735077260">
                <StyledIcon icon="phone-square" size="2x" color="#064614" />
              </SocialLink>
            </SocialLinkBar>
          </SocialWrapper>
        </PageContent>
      </Container>
    );
  }
}

export default ContactPage;

export const query = graphql`
  query SiteMapQuery {
    map: imageSharp(id: { regex: "/map.png/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;

const Container = styled.div`
  padding: 0;
  min-width: 320px;
  width: 60vw;
  color: #064614;
  background-color: #f0fff085;
  border: 3px solid #064614;
  border-radius: 2px;
  font: 1rem "'Georgia Bold', Times, serif";
  display: grid;

  @media screen and (max-width: 480px) {
    width: 80vw;
    padding: 0 0.25rem;
    font: 0.8rem "'Georgia Bold', Times, serif";
  }
`;

const NavBar = styled.nav`
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  margin: 0;
`;

const Heading = styled.h2`
  color: #064614;
  padding: 0.5rem 0 0 0.5rem;
  align-self: center;
  text-transform: uppercase;
  text-decoration: underline;

  @media screen and (max-width: 480px) {
    padding: 0.5rem 0 0 0.25rem;
    margin: 0;
  }
`;

const NavLink = styled(Link)`
  text-align: right;
  color: #064614;
  font: 1rem "'Georgia Bold', Times, serif";
  text-transform: uppercase;
  padding: 0.25rem 0.5rem 0;

  @media screen and (max-width: 480px) {
    padding: 0.25rem 0 0 0;
    font: 0.8rem "'Georgia Bold', Times, serif";
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  :hover {
    color: #678c68;
  }
`;

const PageContent = styled.section`
  margin: 0;
  padding: 0 0.125rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const ContactFormWrapper = styled.article`
  padding: 0 0.5rem 0.5rem;
  min-width: 50%;
  width: 50%;
  border-right: 3px solid #064614;

  @media screen and (max-width: 480px) {
    border: 0;
    padding: 0;
    width: 100%;
  }

  @media screen and (min-width: 481px) and (max-width: 860px) {
    border: 0;
    padding: 0 0.25rem 0.25rem;
    min-width: 100%;
  }
`;

const Form = styled.form`
  display: grid;
  grid-template-rows: repeat(5 minmax(150px, 1fr));
  grid-row-gap: 0.5rem;

  @media screen and (max-width: 480px) {
    grid-row-gap: 0.125rem;
    margin: 0;
  }
`;

const FormField = styled.div`
  display: grid;
  font: 1rem "'Georgia Bold', Times, serif";
  color: #064614;

  label {
    grid-row: 1;
    margin: 0.5rem 0 -0.2rem;
    font: bold 1rem "'Georgia Bold', Times, serif";
  }

  input {
    grid-row: 2;
    color: #064614;
    background: transparent;
    border: 2px solid #064614;
    outline: none;

    :focus {
      color: #678c68;
      border: 2px solid #678c68;
    }
  }

  textarea {
    color: #064614;
    outline: none;
    background: transparent;
    border: 2px solid #064614;
    height: 15vh;

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
    font: bold 1rem "'Georgia Bold', Times, serif";
    color: #064614;
    text-transform: uppercase;
    background-color: transparent;
    border: 3px solid transparent;
    margin: 0;
    padding: 0.125rem 0.25rem 0;
    outline: none;

    :hover {
      color: #678c68;
      text-decoration: underline;
    }
  }
`;

const SocialWrapper = styled.article`
  padding: 0 0.5rem;
  min-width: 50%;
  display: grid;

  span {
    text-align: center;
  }

  @media screen and (max-width: 860px) {
    width: 100%;
    padding: 0.5rem 0.25rem 0;
    border-top: 3px solid #064614;
  }
`;

const SocialLinkBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem 0;
`;

const SocialLink = styled.a`
  color: #064614;
  font: 1rem "'Georgia Bold', Times, serif";

  :hover {
    color: #678c68;
  }
`;
