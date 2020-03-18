import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Styles } from "../Stylesheet/Style-Contact";
import { Form, FormGroup, Input, Button } from "reactstrap";
import axios from "axios";

const initialState = {
  name: "",
  email: "",
  message: "",
  nameError: "",
  emailError: "",
  msgError: ""
};

export default class Contact extends React.Component {
  state = initialState;

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  validate = () => {
    let nameError = "";
    let emailError = "";
    let msgError = "";

    // Error Handling for Name
    if (!this.state.name) {
      nameError = "Name cannot be blank";
    }

    // Error Handling for Email
    if (!this.state.email.includes("@")) {
      emailError = "Invalid email";
    }

    // Error Handling for message
    if (!this.state.message) {
      msgError = "Message cannot be blank";
    }

    if (emailError || nameError || msgError) {
      this.setState({ emailError, nameError, msgError });
      return false;
    }

    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, email, message } = this.state;
    const isValid = this.validate();

    if (isValid) {
      //console.log(this.state);
      axios.post("/api/form", {
        name,
        email,
        message
      });

      //Clear form
      this.setState(initialState);
    }
  };

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
                      value={this.state.name}
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
                      value={this.state.email}
                    />
                    <div style={{ color: "red" }}>{this.state.emailError}</div>
                  </FormGroup>

                  <FormGroup>
                    <Input
                      className="form"
                      placeholder="Your message"
                      type="textarea"
                      rows="3"
                      name="message"
                      value={this.state.message}
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
