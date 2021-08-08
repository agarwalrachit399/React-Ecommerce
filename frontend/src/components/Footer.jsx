import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='text-center footer'>
        <Container>
        <Row>
        <Col>
        
        <form className="footer-form">
          <h2 className='footer-heading'>CONTACT US</h2>
            <p type="Name:"><input placeholder="Write your name here.."></input></p>
            <p type="Email:"><input placeholder="Let us know how to contact you back.."></input></p>
            <p type="Message:"><input placeholder="What would you like to tell us.."></input></p>
             <button>Send Message</button>
        </form>
          </Col>
          <Col className='sitemap'>
             <h2>Sitemap</h2>
             <Link to='/'>
             <p>Home</p></Link>
             <Link to='/about'>
             <p>About</p></Link>
             <Link to='/product'>
             <p>Product</p></Link>
             <Link to='/contact'>
             <p>Contact</p></Link>
          </Col>
          <Col className='footer-3'>
              <img className='logo' src='/logo.jpeg'/>
              <p>
              <i className="fas fa-phone font"></i>
              9140989762</p>
               <p> <i className="far fa-envelope font"></i>
               kratos@gmail.com</p>
          </Col>
          </Row>
          <h2>EAT BETTER LIVE BETTER</h2>
          </Container>
            <p className='copyright'>Copyright 2021</p>
        </div>
    )
}

export default Footer
