import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'
const ProductScreen = ({ match }) => {

    const { id } = useParams()
    const product = products.find((p) => String(p._id) === id)
 
  return (
    <>
      <Link className='btn btn-secondary my-3 btn-sm ' to='/'>
        Volver
      </Link>
      <Card className='bg-light m-6'>
        <Row className='content-product '>
          <Col className='products-container' md={12} lg={7}>
            {/* fluid es para que la imagen no se pase */}
            <Image
              className='img-products img rounded mx-auto d-block'
              src={product.image}
              alt={product.name}
              fluid
            />
          </Col>
          <Col md={12} lg={5}>
            <ListGroup variant='flush' className='bg-white rounded mx-4'>
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={` ${product.numReviews} reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>Precio: ${product.price}</ListGroup.Item>
              <ListGroup.Item>
                Descripcion: {product.description}
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item className='max-widht-3'>
                <Row>
                  <Col>Estado:</Col>
                  <Col>
                    {product.countInStock > 0
                      ? 'Stock Disponible'
                      : 'No hay stock'}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item className='d-flex justify-content-center'>
                <Button
                  className='btn-block my-3 btn-primary '
                  tye='button'
                  disabled={product.countInStock === 0}
                >
                  Agregar al Carrito
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Card>
    </>
  )
}

export default ProductScreen
