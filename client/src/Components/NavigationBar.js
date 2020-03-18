import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "../App.css";
import { Styles } from "../Stylesheet/Style_Nav";
import { Link } from "react-scroll";

export const NavigationBar = () => (
  <Styles>
    
    <Navbar expand="md" fixed="top">
      <div className="container">
        <Navbar.Brand href="/">
          Vinícius <span>Vaz</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Link
                id="link"
                className="link"
                href=""
                to="home"
                smooth={true}
                duration={1000}
              >
                Home
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link id="link" href="" to="about" smooth={true} duration={1000}>
                About
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link
                id="link"
                href=""
                to="projects"
                smooth={true}
                duration={1000}
              >
                Projects
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link
                id="link"
                href=""
                to="contact"
                smooth={true}
                duration={1000}
              >
                Contact
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  </Styles>
);
