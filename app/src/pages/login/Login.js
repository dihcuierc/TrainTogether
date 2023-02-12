import { Formik } from "formik";
import * as Yup from 'yup';

import LinkContainer from "react-router-bootstrap/LinkContainer";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import Nav from "react-bootstrap/Nav";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Image from "react-bootstrap/Image"
import picStyle from "../../assets/css/Pic.module.css"
import background from "../../assets/css/Background.module.css"
import buttonStyle from "../../assets/css/Button.module.css"
import formStyle from "../../assets/css/Form.module.css"
import singpass from "../../assets/images/icons/singpass_logo_white.svg"

export default function Login() {

    return (
        <div className={background.login}>
            <Stack gap={2}>
                <div className="d-flex justify-content-end m-4 pe-3">
                    <div className="text-light mt-2 me-3">Already have an Account?</div>
                    <LinkContainer to="/register">
                        <Nav.Link>
                            <Button variant="outline-secondary" className="text-light rounded-pill px-3">Sign Up</Button>{' '}
                        </Nav.Link>
                    </LinkContainer>
                </div>
                <Container>
                    <h2 className="text-light my-3 mx-3 mx-sm-0">
                        Welcome to <b>Train</b>Together!
                    </h2>
                    <div className={formStyle.login}>
                        <LoginForm></LoginForm>
                        <div className="text-light d-flex justify-content-center m-3">
                            <LinkContainer to="/password/forget">
                                <Nav.Link>
                                    <b>Forget Password?</b>
                                </Nav.Link>
                            </LinkContainer>
                        </div>
                    </div>
                </Container>
            </Stack>
        </div>
    )
}

function LoginForm() {
    const schema = Yup.object().shape({
        email: Yup.string().email('Invalid email address').required("Required"),
        password: Yup.string().required("No password provided")
            .min(8, "Password is too short - a minimum of 8 characters.")
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "Password must contain at least one Uppercase, Lowercase, one number and special character")
    })
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
                <Form onSubmit={handleSubmit} className="text-light ms-3 ms-sm-2">
                    <Form.Group className="mb-3" controlId="emailInput">
                        <FloatingLabel className="text-dark" label="Email Address">
                            <Form.Control
                                type="email"
                                placeholder="example@placeholder.com"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                isInvalid={!!errors.email && touched.email}
                            />
                            <Form.Control.Feedback type="invalid" tooltip>
                                {errors?.email}
                            </Form.Control.Feedback>
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="passwordInput">
                        <FloatingLabel
                            label="Password"
                            className="text-dark">
                            <Form.Control
                                type="password"
                                name="password"
                                placeholder="Password"
                                aria-describedby="passwordBlock"
                                value={values.password}
                                onChange={handleChange}
                                isInvalid={!!errors.password && touched.password}
                            />
                            <Form.Control.Feedback
                                type="invalid"
                                tooltip>
                                {errors?.password}
                            </Form.Control.Feedback>
                        </FloatingLabel>
                    </Form.Group>
                    <div className="d-flex justify-content-center text-muted">
                        OR
                    </div>
                    <div className="d-grid gap-2 pt-2 mt-2">
                        <Button variant="outline-secondary" className="border-1" type="submit">
                            Continue with <Image src={singpass} className={picStyle.singpass} alt="Singpass"/>
                        </Button>
                        <Button
                            className={buttonStyle.auth}
                            type="submit"
                        ><h3>LOGIN</h3></Button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}
