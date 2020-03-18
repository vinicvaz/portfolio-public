import React, { Component } from "react";
import { About } from "./Components/About-Last";
import { ProjectsLast } from "./Components/Projects-Last";
import { NavigationBar } from "./Components/NavigationBar";
import { Jumbotron } from "./Components/Jumbotron";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import styled from "styled-components";
import { Link } from "react-scroll";
import ReactGA from "react-ga";

function initializeAnalytics() {
  ReactGA.initialize("UA-155271694-1");
  ReactGA.pageview(window.location.pathname + window.location.search);
}

const Styles = styled.div`
   {
    .fa-arrow-alt-circle-up {
      font-size: 40px
      position: fixed;
      bottom: 30px
      right: 20px
      color: #807171
      z-index: 10

      @media only screen and (max-width: 767px){
        font-size: 20px
        right: 10px
        bottom: 15px
     }
    }
  }
`;

class App extends Component {
  render() {
    initializeAnalytics();
    return (
      <React.Fragment>
        <Styles>
          <NavigationBar />

          <section id="home">
            <Jumbotron />
            <Link href="" to="home" duration={1000} smooth={true}>
              <i className="far fa-arrow-alt-circle-up"></i>
            </Link>
          </section>
          <section></section>
          <section id="about">
            <About />
          </section>
          <section id="projects">
            <ProjectsLast />
          </section>
          <section id="contact">
            <Contact />
          </section>
          <section id="footer">
            <Footer />
          </section>
        </Styles>
      </React.Fragment>
    );
  }
}

export default App;
