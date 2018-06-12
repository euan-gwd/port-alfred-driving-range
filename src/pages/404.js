import React from "react";
import Link from "gatsby-link";
import styled from "react-emotion";

const NotFoundPage = () => (
  <div>
    <h1>NOT FOUND</h1>
    <p>You just found a page that doesn&#39;t exist... the sadness.</p>
    <NavLink to="/">Home</NavLink>
  </div>
);

export default NotFoundPage;

const NavLink = styled(Link)`
  /* text-align: center; */
  color: #064614;
  font: bold 18px "'Georgia Bold', Times, serif";
  text-transform: uppercase;
  padding: 0.5rem;

  :hover {
    color: #678c68;
  }
`;
