import React from "react";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import "../../assets/css/ErrorPage.css";
import errorPic from "../../assets/images/404Pic.svg"
import LinkContainer from "react-router-bootstrap/LinkContainer";
import Nav from "react-bootstrap/Nav";


export default function ErrorPage() {
    document.title = "404 Error Page";
    return (
        <div className="bg-image">
            <Container className="d-flex min-vh-100">
                <Stack gap={4} className="align-items-center text-center">
                    <Image src={errorPic} className="errorPic mt-5" alt={"Error Picture"}></Image>
                        <h3 className="fw-bold">404 Error - Page Not Found</h3>
                        <h5>The Page You Requested Could Not Be Found!</h5>
                    <LinkContainer to="/">
                        <Nav.Link>
                            <Button className="text-light border-2 px-3">Home</Button>{' '}
                        </Nav.Link>
                    </LinkContainer>
                </Stack>
            </Container>
        </div>
    )
}