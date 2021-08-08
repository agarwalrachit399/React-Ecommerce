import React from 'react'
import { Link } from 'react-router-dom'
import { Row,Col,Image, ListGroup, Card, Container} from 'react-bootstrap'
import { useParams } from 'react-router'

const EachProduct = ({jsonob}) => {
    const {id} = useParams()
   const product =(jsonob.find((p) => p._id === id ))
   
    return (

        <Container>
        <Link className = 'btn btn-light my-3' to='/product'>
           Go Back
        </Link>
              <Row>
                  <Col md={6}>
                    <Image src = {product.image} alt={product.name} fluid/>
                  </Col>
                  <Col md={3}>
                     <ListGroup variant='flush'>
                       <ListGroup.Item>
                        <h3>{product.name}</h3>
                       </ListGroup.Item>
                       <ListGroup.Item>
                        Price : Rs{product.price}
                       </ListGroup.Item>
                       <ListGroup.Item>
                        Description : {product.description}
                       </ListGroup.Item>
                     </ListGroup>
                  </Col>
                  <Col md={3}>
                     <Card>
                         <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price :</Col>
                                    <Col>
                                        <strong>Rs{product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Status :</Col>
                                    <Col>
                                        {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                              <button className='btn-block' type='button'>Add to Cart</button>
                            </ListGroup.Item>
                         </ListGroup>
                     </Card>
                  </Col>
              </Row>
              </Container>
    )
}

export default EachProduct
