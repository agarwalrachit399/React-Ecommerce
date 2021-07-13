import React from 'react'
import { Navbar, Nav , Container} from 'react-bootstrap'


const Navigation = () => {
    return (
      <Container>
        <div>
            <Navbar  expand="lg" collapseOnSelect>
  <Navbar.Brand href="/">Kratos</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/about">About us</Nav.Link>
      <Nav.Link href="/product">Products</Nav.Link>
      <Nav.Link href="/contact">Contact us</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
        </Container>
    )
}

export default Navigation
