import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import { Styles } from "../Stylesheet/Style_Jumbo";

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <Container>
        <h1>W E L C O M E</h1>
        <p id="desc">Computer Engineering</p>
        <p id="location">
          <a
            href="https://goo.gl/maps/Ld6mtQ2CyetMfhoSA"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i class="fas fa-map-marker-alt" />
          </a>
          {"  "}Brazil, Araranguá, Santa Catarina
        </p>
        <p id="social">
          <a
            href="https://www.linkedin.com/in/vinicius-camozzato-vaz-4b003a167/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-linkedin-in text-center">
              <div className="row-md">
                <p>Linkedin</p>
              </div>
            </i>
          </a>
          <a
            href="https://www.github.com/vinicvaz"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-github text-center">
              <div className="row-md">
                <p>Github</p>
              </div>
            </i>
          </a>
          <a
            href="https://drive.google.com/file/d/11DNZmfuYtMAohiCFFkIEkp4yn_oWGJUY/view?usp=sharing"
            rel="noopener noreferrer"
            target="_blank"
            className="text-center"
          >
            <i className="far fa-address-card text-center">
              <div className="row-md">
                <p>Resume</p>
              </div>
            </i>
          </a>
        </p>
      </Container>
    </Jumbo>
  </Styles>
);
