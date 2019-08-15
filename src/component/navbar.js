import React from "react";
import {
  Navbar,
  Button,
  Nav,
  NavDropdown,
  Form,
  FormControl
} from "react-bootstrap";

import logo from "./../assets/logo.jpg";

// need to research react-router
//this is duga nav haha
const TopNav = props => {
  const { changePage, setChangePage } = props;
  const checkActive = aProps => (changePage === aProps ? "active" : "");
  const onPressNav = aProps => setChangePage(aProps);
  console.log(changePage)
  return (
    <>
      <Navbar expand="lg">
        <Navbar.Brand href="#home">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link
              href="#home"
              className={checkActive("home")}
              onClick={() => onPressNav("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#map"
              className={checkActive("map")}
              onClick={() => onPressNav("map")}
            >
              Map
            </Nav.Link>
            <Nav.Link
              href="#route"
              className={checkActive("route")}
              onClick={() => onPressNav("route")}
            >
              Route
            </Nav.Link>
            <Nav.Link
              href="#about"
              className={checkActive("about")}
              onClick={() => onPressNav("about")}
            >
              About
            </Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default TopNav;
