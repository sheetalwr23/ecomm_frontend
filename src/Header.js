import React from 'react';
import { Nav, Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto navbar-wrapper">
                    <Link to="/add">Add Product </Link>
                    <Link to="/update">Update Product </Link>
                    <Link to="/delete">Delete Product </Link>
                    <Link to="/login"> Login</Link>
                    <Link to="/register"> Register</Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header;