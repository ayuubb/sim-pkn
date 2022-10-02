import React from 'react'
import { Nav,Navbar,Container } from 'react-bootstrap';

export default function NavbarComp() {
  return (
    <div>
        <Navbar expand="lg" variant="dark" bg="primary">
            <Container>
                <Navbar.Brand href="#">Navbar</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#pengumuman">Pengumuman</Nav.Link>
                        <Nav.Link href="#panduank">Panduan</Nav.Link>
                        <Nav.Link href="#login">Login</Nav.Link>
                        <Nav.Link href="#daftar">Sign Up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}
