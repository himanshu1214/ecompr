import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import { useGetProductsQuery } from '../slices/productApiSlice';
import Loader from '../components/Loader';
import Message from '../components/Message';


const HomeScreen = () => {

  const { data, isLoading, error } = useGetProductsQuery({});

  return (
    <>
    {isLoading ? ( 
    <Loader/>)
     : error ? (
     <Message>{error?.product?.message || error.error}</Message>
      ): (
      <>
        <h1>Latest Products</h1>
        <Row>
            {data && data.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>

            ))}
          </Row>
      </>
    ) }

    </>

  )
            }

export default HomeScreen;
