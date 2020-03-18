import React from "react";
import { Row, Col, Container, Figure } from "react-bootstrap";
import { Styles } from "../Stylesheet/Style-About-Last";

export const About = () => (
  <Styles>
    <div id="ctn1">
      <Container>
        <Row id="row1" className="row">
          <Col id="col1" className="col" md={4} xs={12}>
            <h1 className="title">
              Hi, I'm Vinícius Camozzato Vaz. <span>Nice</span> to meet you
            </h1>
          </Col>
          <Col id="col2" className="col" md={8} xs={12}>
            <span className="title-text">
              {" "}
              I'm a Computer Engineering Student at Universidade Federal de
              Santa Catarina (UFSC-BR), currently at the eighth semester.
            </span>
            <span className="title-text">
              I've worked with a wide variety of programming languages, with
              over 2 years of experience with Python, C and C++ and over a year
              of web development with HTML, CSS and JavaScript.
            </span>
            <span className="title-text">
              At this moment I'm focused on Data Analysis and Data Science
              projects using mainly the programming language Python.
            </span>
          </Col>
        </Row>
      </Container>
    </div>
    <Col className="container-column" md={12}>
      <Row className="row-skills">
        <Col className="col-img" md={{ span: 6, offset: 3 }}>
          <h1>SKILLS</h1>
          <Row>
            <Col md={4}>
              <p>
                <ul>
                  <li>Python</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>SQL</li>
                  <li>VHDL</li>
                </ul>
              </p>
            </Col>
            <Col className="in-col" md={4}>
              <p>
                <ul>
                  <li>C</li>
                  <li>C++</li>
                  <li>NodeJS</li>
                  <li>ReactJS</li>
                  <li>Bootstrap</li>
                  <li>Pandas</li>
                </ul>
              </p>
            </Col>
            <Col md={4}>
              <p>
                <ul>
                  <li>Numpy</li>
                  <li>Matplotlib</li>
                  <li>Seaborn</li>
                  <li>Plotly</li>
                  <li>Tableau</li>
                  <li>Spark</li>
                </ul>
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>

    <div id="ctn2">
      <Container>
        <Row className="row-dev">
          <Col className="col-dev" md={4} xs={12}>
            <h1 className="title-dev">
              HOW I <span>WORK</span>
            </h1>
            <span className="text-dev">Development Process</span>
          </Col>
          <Col className="col-process" md={8} xs={12}>
            <Row id="row3">
              <Col className="col2" md={4} xs={6}>
                <Figure>
                  <Figure.Image
                    className="figures"
                    src="https://i.imgur.com/KAc6C57.jpg"
                    roundedCircle={true}
                  />
                  <Figure.Caption className="caption">
                    Comunication
                  </Figure.Caption>
                </Figure>
              </Col>
              <Col className="col2" md={4} xs={6}>
                <Figure>
                  <Figure.Image
                    className="figures"
                    src="https://i.imgur.com/QXIjgLm.jpg"
                    roundedCircle={true}
                  />
                  <Figure.Caption className="caption">Planning</Figure.Caption>
                </Figure>
              </Col>
              <Col
                className="col2"
                md={{ span: 4, offset: 0 }}
                xs={{ span: 6, offset: 3 }}
              >
                <Figure>
                  <Figure.Image
                    className="figures"
                    src="https://i.imgur.com/H1ZfCYK.jpg"
                    roundedCircle={true}
                  />
                  <Figure.Caption className="caption">
                    Development
                  </Figure.Caption>
                </Figure>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  </Styles>
);
