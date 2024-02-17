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
            <Navbar.Brand href="/">Joel Wilson English</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Page Contents
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/about">About Me</Nav.Link>
                  <Nav.Link href="/articles">Learning Materials</Nav.Link>
                  <NavDropdown
                    title="Classes"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    show={showDropdownState}
                    onMouseEnter={showDropdown}
                    onMouseLeave={hideDropdown}
                  >
                    <NavDropdown.Item href="/one-to-one-classes">One to One</NavDropdown.Item>
                    <NavDropdown.Item href="/group-classes">
                      Group
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </nav>
  );
}

export default NavFile;
