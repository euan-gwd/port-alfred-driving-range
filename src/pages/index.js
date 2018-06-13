import React, { Component } from "react";
import ReactDOM from "react-dom";

import Link from "gatsby-link";
import styled from "react-emotion";
import Header from "../components/header.js";

class IndexPage extends Component {
  componentDidMount = () => {
    this.container.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 300,
      fill: "forwards",
      easing: "ease-in-out",
      iterations: 1,
    });
  };

  render() {
    return (
      <Container
        ref={container => (this.container = ReactDOM.findDOMNode(container))}
      >
        <Header />
        <Intro>
          <p>
            Nestled amongst the rolling hills of the sleepy town of Port Alfred,
            lies a driving range that shares its namesake. Come join us for a
            great day out, bring your own golf clubs, hit some golf balls.
            <br /> Golf Clubs are also available for hire as well.
          </p>
          <p>
            Our conversant and neighborly golf pro Colin Mavuso is on hand to
            provide conversation and guidance. Private lessons are available on
            request.
          </p>
          <p>
            The Port Alfred Driving Range is conveniently located behind the
            Rosehill Mall.
          </p>
        </Intro>
        <NavBar>
          <NavLink to="/services/">Services</NavLink>
          <NavLink to="/contact/">Contact</NavLink>
        </NavBar>
      </Container>
    );
  }
}

export default IndexPage;

const Container = styled.div`
  padding: 0;
  min-width: 320px;
  width: 60vw;
  display: grid;
  color: #064614;
  font: 18px "'Georgia Bold', Times, serif";

  @media screen and (max-width: 480px) {
    width: 90vw;
  }
`;

const Intro = styled.section`
  background-color: #f0fff085;
  border: 3px solid #064614;
  border-radius: 2px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  text-align: center;
  margin: 0;
  padding: 0.5rem;
`;

const NavBar = styled.nav`
  color: #064614;
  background-color: #f0fff075;
  border-top: none;
  border-bottom: 3px solid #064614;
  border-left: 3px solid #064614;
  border-right: 3px solid #064614;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const NavLink = styled(Link)`
  text-align: center;
  color: #064614;
  font: bold 18px "'Georgia Bold', Times, serif";
  text-transform: uppercase;
  padding: 0.5rem;

  :first-of-type {
    border-right: 3px solid #064614;
  }

  :hover {
    color: #678c68;
  }
`;
