import React from 'react'
import { Navbar, Nav ,Container} from 'react-bootstrap'

const Header = () => {
   return (
     
        <div>
            <Navbar  bg="light" expand="lg" collapseOnSelect>
  <Navbar.Brand href="/">Kratos</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="/cart">Cart</Nav.Link>
      <Nav.Link href="/login">Sign In</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
        
    )
}

export default Header
