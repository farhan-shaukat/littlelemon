import Nav from "./Nav";
import logo from "../assets/icons/Logo.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

import React from "react";

function Header() {
  return (
    <>
      <header className="header">
        <Container>
          <Row>
            <Col lg="3">
              <div className="logo">
                <Link to="/">
                  <img src={logo} alt="Logo" />
                </Link>
              </div>
            </Col>
            <Col lg="9">
              <nav className="navigation">
                <Nav />
            </nav>
            </Col>
          </Row>
        </Container>
        </header>
    </>
  );
}

export default Header;