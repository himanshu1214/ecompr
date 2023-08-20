import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem } from 'react-bootstrap';
import Rating from '../components/Rating';
import { useGetProductsByIdQuery } from '../slices/productApiSlice';
import { useParams, id } from 'react-router-dom';

const ProductScreen = () => {

  const { id: productId } = useParams();
  const { data: product, isLoading, error }  = useGetProductsByIdQuery(productId);

  return (
    <>
    <Link className='btn btn-light' to='/'> Go Back </Link> 

    {isLoading ? ( 
    <h2>Loading....</h2>) : error ? (
        <div>{error?.product?.message || error.error}</div>
    ): (
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
    ) 
  }
    </>

)
};


export default ProductScreen;
