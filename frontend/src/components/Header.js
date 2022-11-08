import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <header>
            <Navbar bg='primary' variant='dark'>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>
                            <img className='img-logo' src='/images/logo.png' alt='logo' />

                        </Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ms-auto'>
                            {/* link carrito de compras */}
                            <LinkContainer to='/cart'>
                                <Nav.Link href='/cart'>
                                    <FontAwesomeIcon icon={faCartShopping} />{' '}
                                    Carrito
                                </Nav.Link>
                            </LinkContainer>
                            {/* link iniciar sesion */}
                            <LinkContainer to='/login'>
                                <Nav.Link>
                                    <FontAwesomeIcon icon={faUser} /> Iniciar
                                    Sesión
                                </Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
