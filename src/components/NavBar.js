import React from "react";
import {
    Navbar,
    Nav,
    Button,
    Container,
    NavDropdown,
    Form,
    FormControl,
} from "react-bootstrap";

const NavBar = () => {
    return (
        <Navbar
            className="d-flex justify-content-between"
            bg="dark"
            expand="md"
            variant="dark"
        >
            <Container fluid>
                <Navbar.Brand href="#">Desafió Nº 2</Navbar.Brand>
                <Navbar.Brand href="#home">
                    <img
                        src="https://static1.diariosur.es/www/multimedia/201909/30/media/cortadas/imagensensible-kYzD-U90285421336FWD-624x385@Diario%20Sur.jpg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: "100px" }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Inicio</Nav.Link>
                        <Nav.Link href="#action2">Contacto</Nav.Link>
                        <NavDropdown
                            title="Servicios"
                            id="navbarScrollingDropdown"
                        >
                            <NavDropdown.Item href="#action3">
                                Servicio 1
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Servicio 2
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Servicio 3
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#">Quienes somos</Nav.Link>
                    </Nav>
                    <div className="ml-auto p-2">
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Buscar"
                                className="me-2 mr-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Buscar </Button>
                        </Form>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
