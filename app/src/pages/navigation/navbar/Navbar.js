import {Outlet, Link} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {LinkContainer} from "react-router-bootstrap";
import {Button} from "react-bootstrap";
import "./Navbar.css";

function nav() {
    return (
    <>
        <Navbar fixed="top" collapseOnSelect bg="dark" expand="lg" variant="dark">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>TrainTogether</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="navbar-nav"/>
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/">
                            <Nav.Link>Maps</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Nav>
                        <LinkContainer to="/login">
                            <Nav.Link>
                                <Button>Sign in</Button>
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/register">
                            <Nav.Link>
                                <Button>Sign Up</Button>
                            </Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Outlet/>
    </>
    )
}

export default nav;