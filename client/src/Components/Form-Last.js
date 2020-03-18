import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Styles } from "../Stylesheet/Style-Contact";
import { Form, FormGroup, Input, Button } from "reactstrap";
import axios from "axios";

export default class Formulario extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      message: "",
      nameError: "",
      emailError: "",
      msgError: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  validate = () => {
    let nameError = "";
    let emailError = "";
    let msgError = "";

    if (!this.state.email.includes("@")) {
      emailError = "Invalid Email";
    }

    if (emailError) {
      this.setState({ emailError });
      return false;
    }

    return true;
  };

  async handleSubmit(e) {
    e.preventDefault();
    const { name, email, message } = this.state;
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      const form = await axios.post("/api/form", {
        name,
        email,
        message
      });
      // Clear Form
      this.state.nameError = "";
      this.state.emailError = "";
      this.state.msgError = "";
    }
  }

  render() {
    return (
      <Styles>
        <div className="fluid">
          <Container>
            <Row className="row1">
              <h1>CONTACT</h1>
            </Row>
            <Row>
              <Col sm={{ span: 6, offset: 3 }} xs={{ span: 8, offset: 2 }}>
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <Input
                      className="form"
                      placeholder="Name"
                      type="text "
                      name="name"
                      onChange={this.handleChange}
                    />
                    <div style={{ color: "red" }}>{this.state.nameError}</div>
                  </FormGroup>

                  <FormGroup>
                    <Input
                      className="form"
                      placeholder="Enter email"
                      type="email "
                      name="email"
                      onChange={this.handleChange}
                    />
                    <div style={{ color: "red" }}>{this.state.emailError}</div>
                  </FormGroup>

                  <FormGroup>
                    <Input
                      className="form"
                      placeholder="Your Message"
                      type="textarea"
                      rows="4"
                      name="message"
                      onChange={this.handleChange}
                    />
                    <div style={{ color: "red" }}>{this.state.msgError}</div>
                  </FormGroup>

                  <Button className="btn">Submit</Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </Styles>
    );
  }
}
