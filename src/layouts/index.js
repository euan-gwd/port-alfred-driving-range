import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "react-emotion";
import Img from "gatsby-image";
import "./index.css";
import Header from "../components/header.js";

const Layout = ({ children, data }) => (
  <Wrapper>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" },
      ]}
    />
    <Header />
    <Main>{children()}</Main>
    <Img
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
      }}
      sizes={data.background.sizes}
    />
  </Wrapper>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

export const queryname = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
    background: imageSharp(id: { regex: "/images/bg.jpg/" }) {
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
  display: grid;
  justify-content: center;
  align-items: center;
`;

const Main = styled.main`
  margin: 0;
  padding: 0;
  position: relative;
  z-index: 2;
`;
