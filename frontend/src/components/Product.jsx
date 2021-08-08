import React from 'react'
import Navigation from './Navigation'
import ProductImg from './ProductImg'
import { Row,Col, Container } from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Product = ({jsonob}) => {
    return (
         <div>
      <div className='product-header'>
            <Container>
                <Navigation/>
                
                <Row>
                <Col>
                <img className='fresh-img' src='/images/fresh-bread.png'></img></Col>
                <Col><img className='fresh-img' src='/images/fresh-cookie.png'></img></Col>
                </Row>
                </Container>
          </div>  

          <Container className='products-middle'>
          <h2>Our Menu</h2>
          <Row>
            <Col><Link to='/product'>
            Special Bites</Link></Col>
            <Col><Link to='/product/cookie'>Cookies</Link></Col>
            <Col><Link to='/product/muffin'>Muffins</Link></Col>
            <Col><Link to='/product/poundcake'>PoundCakes</Link></Col>
          </Row>
              <Row>
                {jsonob.map((product)=>(
                <Col lg={4}>
                  <ProductImg product={product} />
                </Col>
                ))}
              </Row> 

              </Container>
              </div>
    )
}

export default Product
