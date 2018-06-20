import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "react-emotion";
import Image from "gatsby-image";
import "./index.css";

import fontawesome from "@fortawesome/fontawesome";
import faWindowClose from "@fortawesome/fontawesome-free-regular/faWindowClose";
import faCheckSquare from "@fortawesome/fontawesome-free-regular/faCheckSquare";
import faPhoneSquare from "@fortawesome/fontawesome-free-solid/faPhoneSquare";
import faFacebookSquare from "@fortawesome/fontawesome-free-brands/faFacebookSquare";
import faInstagram from "@fortawesome/fontawesome-free-brands/faInstagram";

fontawesome.library.add(
  faFacebookSquare,
  faInstagram,
  faWindowClose,
  faCheckSquare,
  faPhoneSquare
);

const Layout = ({ children, data }) => (
  <Wrapper>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[{ name: "description", content: "Port ALfred Driving Range" }]}
    />
    <Main>{children()}</Main>
    <Image
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100vh",
        objectFit: "cover",
        objectPosition: "center center",
      }}
      sizes={data.background.sizes}
    />
  </Wrapper>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
    background: imageSharp(id: { regex: "/bg.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;

const Wrapper = styled.div`
  margin: 0;
  overflow: hidden;
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.main`
  margin: 0 0 1rem;
  padding: 0;
  position: relative;
  z-index: 2;
  display: flex;

  @media screen and (max-width: 480px) {
    margin: 0 0 0.5rem;
  }
`;
