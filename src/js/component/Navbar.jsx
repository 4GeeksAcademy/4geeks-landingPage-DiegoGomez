import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Navigation = () => {
  return (
    //Empieza navbar
    <Navbar bg="dark" variant="dark" expand="md">
      <Container fluid>
        {/* Navbar.brand se suele utilizar para el logo/título */}
        <Navbar.Brand href="#home" className="fs-4">
          Start bootstrap
        </Navbar.Brand>
        {/*Este toggle se muestra cuando la pantalla es más pequeña del ml-md */}
        <Navbar.Toggle aria-controls="navbar-nav" />
        {/*El contenido del navbar está dentro del navbar.collapse para que cuando la
              pantalla se haga más pequeña del middle size cambie su estructura y se
              adapte*/}
        <Navbar.Collapse id="navbar-nav">
          {/*Dentro del Nav ajusto los márgenes para que quede separado*/}
          <Nav className="ml-md-auto ml-sm-0 ms-auto">
            <Nav.Link href="#home" className="text-white fs-5">
              Home
            </Nav.Link>
            <Nav.Link href="#about" className="fs-5">
              About
            </Nav.Link>
            <Nav.Link href="#services" className="fs-5">
              Services
            </Nav.Link>
            <Nav.Link href="#contact" className="fs-5">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
