import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem } from 'react-bootstrap';
import Rating from '../components/Rating';
import products from '../products';

const ProductScreen = ({ match }) => {
    // console.log(this.props.match.params.id)
    const { id } = useParams(); // useParams to access the request params, diff from v5 to v6 no longer support, match
    const product = products.find( (p) => String(p._id) === id)
    if (!product) return null;
    // console.log(product.name);
  return (
    <>
    <Link className='btn btn-light' to='/'> Go Back </Link> 
    <Row>
        <Col md={6}> 
            <Image src={product.image} alt={product.name} fluid/>
        </Col>
        <Col md={3}> 
        <ListGroup variant='flush'>
            <ListGroupItem>
                <h3>{product.name}</h3>
            </ListGroupItem>
            <ListGroupItem>
                <Rating value={product.rating} text={`${product.numReviews} reviews`} />
            </ListGroupItem>
            <ListGroupItem>
                Price: ${product.price}
            </ListGroupItem>
            <ListGroupItem>
                Description: {product.description}
        </ListGroupItem>
        </ListGroup>
        </Col>
        <Col md={3}>
            <Card> 
                <ListGroup variant='flush'>
                    <ListGroupItem>
                        <Row>
                            <Col md={3}>
                                Price:
                            </Col>
                            <Col>
                                <strong>${product.price}</strong>
                            </Col>
                        </Row>
                    </ListGroupItem>
                    
                    <ListGroupItem>
                        <Row>
                            <Col md='auto' fluid>Status: </Col>
                            <Col>
                                { product.countInStock > 0 ? 'In Stock' : 'Out Of Stock' }
                            </Col>
                        </Row>
                    </ListGroupItem>
                    <ListGroupItem >
                        <Button className='bnt-block' type='button' disabled={product.countInStock ===0 }>
                            Add to Cart
                        </Button>
                    </ListGroupItem>
                </ListGroup>
            </Card>
        </Col>
    </Row>
    </>
  )
}


export default ProductScreen;
