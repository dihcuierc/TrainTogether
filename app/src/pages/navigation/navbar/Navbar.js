import {Outlet, Link, useLocation} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {LinkContainer} from "react-router-bootstrap";
import {Button} from "react-bootstrap";
import "../../../assets/css/Navbar.css";

const withoutSidebarRoutes = ["/login"];

export default function NavigationBar() {
    const {pathname} = useLocation();

    const noSideBars = withoutSidebarRoutes.some((item) => pathname.includes(item));

    const navbarToggle =
        <>
        <Navbar.Toggle aria-controls="navbar-nav"/>
        <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
                <LinkContainer to="/">
                    <Nav.Link className="mx-2">Workout</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/login">
                    <Nav.Link className="mx-2">Exercise Facilities</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/register">
                    <Nav.Link className="mx-2">Community</Nav.Link>
                </LinkContainer>
            </Nav>
            <Nav className="ms-auto">
                <LinkContainer to="/login">
                    <Nav.Link>
                        <Button variant="outline-primary" className="text-light">Sign in</Button> {' '}
                    </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/register">
                    <Nav.Link>
                        <Button variant="outline-secondary" className="text-light">Sign Up</Button>{' '}
                    </Nav.Link>
                </LinkContainer>
            </Nav>
        </Navbar.Collapse>
    </>

    return (
    <>
        <Navbar collapseOnSelect bg="darkblue" expand="lg" variant="dark">
            <Container fluid className="mx-5">
                <LinkContainer to="/">
                    <Navbar.Brand>
                        <b>Train</b>
                        Together
                    </Navbar.Brand>
                </LinkContainer>
                {noSideBars ? null : navbarToggle}
            </Container>
        </Navbar>
        <Outlet/>
    </>
    )
}