import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import LinkContainer from "react-router-bootstrap/LinkContainer";
import Nav from "react-bootstrap/Nav";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Formik } from "formik";
import * as Yup from 'yup';
import "./Login.css";


const schema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required("Required"),
    password: Yup.string().required("No password provided")
        .min(8, "Password is too short - a minimum of 8 characters.")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "Password must contain at least one Uppercase, Lowercase, one number and special character")
})

function LoginForm() {
    return (
        <Formik validationSchema={schema}
                onSubmit={console.log}
         initialValues={{
             email: '',
             password: ''
         }}>
            {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                isValid,
                  errors
              }) => (
                <Form onSubmit={handleSubmit} className="text-light">
                    <Form.Group className="mb-3" controlId="emailInput">
                        <FloatingLabel className="text-dark" label="Email Address">
                            <Form.Control
                                type="email"
                                placeholder="example@placeholder.com"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                isInvalid={!!errors.email}
                            />
                            <Form.Control.Feedback type="invalid" tooltip>
                                {errors?.email}
                            </Form.Control.Feedback>
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="passwordInput">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" aria-describedby="passwordBlock"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formRmb">
                        <Form.Check type="checkbox" label="Remember Me"/>
                    </Form.Group>
                    <div className="d-grid gap-2 pt-2">
                        <Button
                            className="loginButton"
                            type="submit"
                        >Login</Button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default function Login() {

    return (
        <div className="min-vh-100 bg-dark">
            <Stack gap={2}>
                <div className="d-flex justify-content-end m-4 pe-3">
                    <LinkContainer to="/register">
                        <Nav.Link>
                            <Button variant="outline-secondary" className="text-light rounded-pill px-3">Sign Up</Button>{' '}
                        </Nav.Link>
                    </LinkContainer>
                </div>
                <Container className="mt-3 mx-auto">
                    <h2 className="text-light my-3">
                        Welcome to TrainTogether
                    </h2>
                    <div className="auth-form">
                        <LoginForm></LoginForm>
                    </div>
                </Container>
            </Stack>
        </div>
    )
}