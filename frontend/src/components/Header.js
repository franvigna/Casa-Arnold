import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping, faUser} from '@fortawesome/free-solid-svg-icons'


const Header = () => {
  return (
    <header>
        <Navbar bg="primary" variant="dark">
            <Container>
            <Navbar.Brand href="/">Casa Arnold</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='ms-auto'> 
                    <Nav.Link  href="/cart"><FontAwesomeIcon icon={faCartShopping}/> Carrito</Nav.Link>
                    <Nav.Link  href="/login"><FontAwesomeIcon icon={faUser}/> Iniciar Sesión</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>

        </Navbar>
    </header>
  )
}

export default Header