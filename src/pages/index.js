import React from "react";
import Link from "gatsby-link";
// import styled from "react-emotion";
import Img from "gatsby-image";

const IndexPage = ({ data }) => (
  <div>
    <Img sizes={data.background.sizes} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
);

export default IndexPage;

export const queryimage = graphql`
  query SiteImages {
    background: imageSharp(id: { regex: "/bg.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
