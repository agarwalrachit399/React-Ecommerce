import React from 'react'
import { Navbar, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const Header = () => {
   return (
     
        <div>
            <Navbar  bg="light" expand="lg" collapseOnSelect>
            <LinkContainer to ='/'>
             <Navbar.Brand>Kratos</Navbar.Brand></LinkContainer>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
             <Nav className="ml-auto">
             <LinkContainer to ='/cart'>
                  <Nav.Link>Cart</Nav.Link></LinkContainer>
                  <LinkContainer to ='/login'>
                <Nav.Link>Sign In</Nav.Link></LinkContainer>
                </Nav>
              </Navbar.Collapse>
             </Navbar>
        </div>
        
    )
}

export default Header
