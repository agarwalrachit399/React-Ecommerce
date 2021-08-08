import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import HomeImg from './HomeImg'

const BottomContainer = () => {
    return (
        <div id='home-product'>
        <h2 >Products</h2>
        <Container>
         <Row className='py-3'>
          <Col><HomeImg image='/images/special-treats/protienbar.jpg' name='Special-treats' link='/product'/></Col>
          <Col><HomeImg image ='/images/pound-cake/beetroot.jpg' name='Pound cakes' link='/product/poundcake'/></Col>
          <Col><HomeImg image ='/images/pound-cake/blueberry.jpg' name='Muffins' link='/product/muffin'/></Col>
          <Col><HomeImg image ='/images/pound-cake/protien.jpg' name='Cookies' link='/product/cookie'/></Col>
         </Row>
       </Container>
      </div>
    )
}

export default BottomContainer
