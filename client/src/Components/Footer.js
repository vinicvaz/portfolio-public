import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Styles } from "../Stylesheet/Style-Footer";

export default class Footer extends React.Component {
  render() {
    return (
      <Styles>
        <div className="fluid">
          <Container>
            <Row className="row1">
              <Col className="col" md={12}>
                <a
                  href="https://www.linkedin.com/in/vinicius-camozzato-vaz-4b003a167/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-linkedin-in text-center">
                    <div>
                      <p className="caption">Linkedin</p>
                    </div>
                  </i>
                </a>
                <a
                  href="https://www.github.com/vinicvaz"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-github text-center">
                    <div>
                      <p className="caption">Github</p>
                    </div>
                  </i>
                </a>
              </Col>
            </Row>
            <Row className="row1">
              <Col className="col2" md={12}>
                <span className="copyright">
                  ViníciusVaz<i class="fas fa-copyright">2019</i>{" "}
                </span>
              </Col>
            </Row>
          </Container>
        </div>
      </Styles>
    );
  }
}
