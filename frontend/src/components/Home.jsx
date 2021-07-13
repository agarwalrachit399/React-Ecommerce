import React from 'react'
import Navigation from './Navigation'
import { Container,Row,Col } from 'react-bootstrap'


const Home = () => {
    return (
      <div>
        <div id='home-header'>
          <Navigation/>
          <Container>
          <Row>
          <Col>
          <h2>Title Heading</h2>
            <h4>Subtitle Heading</h4>
          </Col>
          <Col>
              <img style={{width:"50%"}} src='https://static01.nyt.com/images/2020/10/21/dining/16cookie4/merlin_177117912_a1ebb5f5-4632-4e07-85d2-0bd270dda5b2-articleLarge.jpg'/>
          </Col>
            
            </Row>
            </Container>
        </div>

        <div id='home-feature'>
          <h2>Features</h2>
        </div>
        <div id='home-product'>
          <h2>Products</h2>
        </div>
        </div>
            
    )
}

export default Home
