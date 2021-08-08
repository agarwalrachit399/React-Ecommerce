import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const Navigation = () => {
    return (
      
        <div className='home-nav'>
            <Navbar variant='dark'  expand="lg" collapseOnSelect>
            <LinkContainer to='/'>
  <Navbar.Brand >Kratos</Navbar.Brand></LinkContainer>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
    <LinkContainer to='/' exact>
      <Nav.Link>Home</Nav.Link></LinkContainer>

      <LinkContainer to='/about'>
      <Nav.Link>About us</Nav.Link></LinkContainer>

      <LinkContainer to='/product'>
      <Nav.Link>Products</Nav.Link></LinkContainer>

      <LinkContainer to='/contact'>
      <Nav.Link>Contact us</Nav.Link></LinkContainer>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
       
    )
}

export default Navigation
