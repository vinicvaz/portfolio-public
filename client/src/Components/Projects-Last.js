import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Styles } from "../Stylesheet/Style-Projects-Last";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

export const ProjectsLast = () => (
  <Styles>
    <div className="fluid">
      <Container className="ctn">
        <Row className="row1">
          <h1 className="title">PROJECTS</h1>
        </Row>
        <Row className="row2" noGutters={true}>
          <Col className="col1" md={4} xs={6}>
            <div className="inner">
              <Image
                className="img"
                src="https://i.imgur.com/CzCvXXv.jpg"
                fluid
              ></Image>
              <div className="overlay">
                <h1 className="header">FPGA</h1>
                <p className="text">SPI Protocol</p>
                <p className="text">
                  <span>VHDL</span>
                </p>
                <div className="mid">
                  <Button
                    className="btn"
                    variant="primary"
                    href="https://github.com/vinicvaz/VHDL"
                    target="_blank"
                  >
                    View Code
                  </Button>
                </div>
              </div>
            </div>
          </Col>
          <Col className="col1" md={4} xs={6}>
            <div className="inner">
              <Image
                className="img"
                src="https://i.imgur.com/WkxFKaF.jpg"
                fluid
              ></Image>
              <div className="overlay">
                <h1 className="header">Cleaner</h1>
                <p className="text">
                  Autonomous robot with environment tracking and mapping
                </p>
                <p className="text">
                  <span>Python + C </span>
                </p>
                <div className="mid">
                  <Button
                    className="btn"
                    variant="primary"
                    href="https://github.com/vinicvaz/Cleaner/tree/Stepper"
                    target="_blank"
                  >
                    View Code
                  </Button>
                </div>
              </div>
            </div>
          </Col>
          <Col className="col1" md={4} xs={6}>
            <div className="inner">
              <Image
                className="img"
                src="https://i.imgur.com/XNBrdwQ.jpg"
                fluid
              ></Image>
              <div className="overlay">
                <h1 className="header">Data Workflow</h1>
                <p className="text">
                  Data transfer and control with versioning from raw csv file to
                  database table
                </p>
                <p className="text">
                  <span>SQL + SSIS</span>
                </p>
                <div className="mid">
                  <Button
                    className="btn"
                    variant="primary"
                    href="https://github.com/vinicvaz/SSIS_SQL"
                    target="_blank"
                  >
                    View Code
                  </Button>
                </div>
              </div>
            </div>
          </Col>
          <Col className="col1" md={4} xs={6}>
            <div className="inner">
              <Image
                className="img"
                src="https://i.imgur.com/E7kPqnn.jpg"
                fluid
              ></Image>
              <div className="overlay">
                <h1 className="header">Neural Network</h1>
                <p className="text">
                  Multilayer Perceptron built to break an encryption
                </p>
                <p className="text">
                  <span>C</span>
                </p>
                <div className="mid">
                  <Button
                    className="btn"
                    variant="primary"
                    href="https://github.com/vinicvaz/FirstRnaProject"
                    target="_blank"
                  >
                    View Code
                  </Button>
                </div>
              </div>
            </div>
          </Col>
          <Col className="col1" md={4} xs={6}>
            <div className="inner">
              <Image
                className="img"
                src="https://i.imgur.com/BT7jpCK.jpg"
                fluid
              ></Image>
              <div className="overlay">
                <h1 className="header">File System</h1>
                <p className="text">Simulated file system following EXT3</p>
                <p className="text">
                  {" "}
                  <span>C</span>
                </p>
                <div className="mid">
                  <Button
                    className="btn"
                    variant="primary"
                    href="https://github.com/vinicvaz/FileSystem"
                    target="_blank"
                  >
                    View Code
                  </Button>
                </div>
              </div>
            </div>
          </Col>
          <Col className="col1" md={4} xs={6}>
            <div className="inner">
              <Image
                className="img"
                src="https://i.imgur.com/dZEH8oa.jpg"
                fluid
              ></Image>
              <div className="overlay">
                <h1 className="header">My Portfolio</h1>
                <p className="text">
                  My portfolio web-site built to store college and work projects
                </p>
                <p className="text">
                  {" "}
                  <span>HTML + CSS + JavaScript</span>
                  <br />
                  <span>React + Node</span>
                </p>
                <div className="mid">
                  <Button
                    className="btn"
                    variant="primary"
                    href="https://github.com/vinicvaz/portfolio-public"
                    target="_blank"
                  >
                    View Code
                  </Button>
                </div>
              </div>
            </div>
          </Col>
          <Col className="col1" md={4} xs={6}>
            <div className="inner">
              <Image
                className="img"
                src="https://i.imgur.com/lVQd9Qa.jpg"
                fluid
              ></Image>
              <div className="overlay">
                <h1 className="header">E-commerce Data Analysis</h1>
                <p className="text">
                  Data analysis for a national store network.
                </p>
                <p className="text">
                  <span>Python + PySpark</span>
                </p>
                <div className="mid">
                  <Button
                    className="btn"
                    variant="primary"
                    href="https://github.com/vinicvaz/Linx-DataAnalysis"
                    target="_blank"
                  >
                    View Code
                  </Button>
                </div>
              </div>
            </div>
          </Col>
          <Col className="col1" md={4} xs={6}>
            <div className="inner">
              <Image
                className="img"
                src="https://i.imgur.com/iYaZx22.jpg"
                fluid
              ></Image>
              <div className="overlay">
                <h1 className="header">YOUTUBE VIDEO RECOMENDATION</h1>
                <p className="text">
                  Personalized recomendation system to inprove experience of
                  search and find youtube videos for DS study.
                </p>
                <p className="text">
                  <span>Python + HTML + Flask</span>
                </p>
                <div className="mid">
                  <Button
                    className="btn"
                    variant="primary"
                    href="https://github.com/vinicvaz/ML-Recomendation"
                    target="_blank"
                  >
                    View Code
                  </Button>
                </div>
              </div>
            </div>
          </Col>
          <Col className="col1" md={4} xs={6}>
            <div className="inner">
              <Image
                className="img"
                src="https://i.imgur.com/qw7WsO4.png"
                fluid
              ></Image>
              <div className="overlay">
                <h1 className="header">BE THE HERO</h1>
                <p className="text">
                  The Be The Hero App will connect NGOs that need help with people who want to help.
                </p>
                <p className="text">
                  <span>JavaScript + HTML + CSS</span>
                  <br />
                  <span>React + Node</span>
                </p>
                <div className="mid">
                  <Button
                    className="btn"
                    variant="primary"
                    href="https://github.com/vinicvaz/omnistack-app"
                    target="_blank"
                  >
                    View Code
                  </Button>
                </div>
              </div>
            </div>
          </Col>

        </Row>
      </Container>
    </div>
  </Styles>
);
