import {Outlet, useLocation} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {LinkContainer} from "react-router-bootstrap";
import {Button} from "react-bootstrap";
import "../../assets/css/Navbar.css";

const withoutSidebarRoutes = ["/login","/register"];

export default function NavigationBar() {
    const {pathname} = useLocation();

    const noSideBars = withoutSidebarRoutes.some((item) => pathname.includes(item));

    return (
    <>
    <Navbar collapseOnSelect bg="darkblue" expand="lg" variant="dark" className="navbar-height">
        <Container fluid className="mx-5">
            <LinkContainer to="/">
                <Navbar.Brand>
                    <b>Train</b>
                    Together
                </Navbar.Brand>
            </LinkContainer>
            {noSideBars ? null : <NavigationToggle/>}
        </Container>
    </Navbar>
    <Outlet/>
    </>
    )
}

function NavigationToggle() {
    return(
    <>
        <Navbar.Toggle aria-controls="navbar-nav"/>
        <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
                <LinkContainer to="/exercises">
                    <Nav.Link className="mx-3">Workout</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/">
                    <Nav.Link className="mx-3">Exercise Facilities</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/eateries">
                    <Nav.Link className="mx-3">Hungry Go Where?</Nav.Link>
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
)
}