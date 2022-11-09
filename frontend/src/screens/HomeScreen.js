import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import AboutUs from '../components/AboutUs'
import Hero from '../components/Hero'
import products from '../products'

const HomeScreen = () => {
  return (
    <>
      <Hero />

      <AboutUs />
      <h2>Últimos Productos</h2>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
