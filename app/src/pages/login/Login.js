import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "./Login.css";
import {useEffect, useState} from "react";
import {wait} from "@testing-library/user-event/dist/utils";

export default function Login() {
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        if (isLoading) {
            wait(500).then(() => {
                setLoading(false);
            })
        }
    }, [isLoading]);

    const handleClick = () => setLoading(true);
    return (
        <div className="d-flex min-vh-100 flex-fill pt-5 bg-black">
            <Container className="auth-form mt-5 bg-dark">
                <Form className="text-light">
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="example@placeholder.com"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formRmb">
                        <Form.Check type="checkbox" label="Remember Me"/>
                    </Form.Group>
                    <div className="d-grid gap-2 pt-2">
                        <Button className="loginButton"
                            disabled={isLoading}
                            onClick={!isLoading ? handleClick : null}
                            type="submit"
                        > {isLoading ? "Logging in" : "Login"} </Button>
                    </div>
                </Form>
            </Container>
        </div>
    )
}