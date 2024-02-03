import {
  Button,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  Offcanvas,
} from "react-bootstrap";
import './Navbar.css'

import { useState } from "react";

function NavFile({expand}) {
  const [showDropdownState, setShowDropdownState] = useState(false)
  const showDropdown = (e) => {
    setShowDropdownState(!showDropdownState)
  }

  const hideDropdown = (e) => {
    setShowDropdownState(false)
  }

  return (
    <nav>
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Joel Wilson English</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">About Me</Nav.Link>
                  <Nav.Link href="#action2">Learning Materials</Nav.Link>
                  <NavDropdown
                    title="Classes"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    show={showDropdownState}
                    onMouseEnter={showDropdown}
                    onMouseLeave={hideDropdown}
                  >
                    <NavDropdown.Item href="#action3">One to One</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Group
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </nav>
  );
}

export default NavFile;
