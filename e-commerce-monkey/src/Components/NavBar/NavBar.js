import React from "react"
import "./NavBar.css"
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

export default function NavBar () {
          return (
            <div className="App">
              <Navbar bg="dark" variant="dark"
                sticky="top" expand="sm" collapseOnSelect>
                <Navbar.Brand>
                  <h1>Monkey</h1>
                </Navbar.Brand>
                <Navbar.Toggle className="coloring" />
                <Navbar.Collapse>
                  <Nav>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#blog">Products</Nav.Link>
                    <Nav.Link href="#about-us">About Us</Nav.Link>
                    <Nav.Link href="#contact-us">Contact Us</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
          );
}