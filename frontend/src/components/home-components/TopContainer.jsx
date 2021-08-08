import React from 'react'
import Navigation from '../Navigation'
import { Col, Container,Row } from 'react-bootstrap'

const TopContainer = () => {
    return (
            <div id='home-header'>
        <Container>
          <Navigation/>
          <Row>
          <Col className='heading-text'>
          <h2>Welcome to our bakery</h2>
            <p>Diet doesn't stop you from eating delicious food.
            <br/>
               It stops you from eating junk food</p>
               </Col>
            </Row>
            </Container>
        </div>
        
    )
}

export default TopContainer
