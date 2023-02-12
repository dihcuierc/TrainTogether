import {Formik} from "formik";
import * as Yup from "yup";

import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import formStyle from "../../assets/css/Form.module.css";
import background from "../../assets/css/Background.module.css";
import padding from "../../assets/css/Padding.module.css"

export default function Forget() {
    return(
        <div className={`${background.login } d-flex`}>
            <div className={`${padding.heading} mx-auto`}>
                <div className={`${formStyle.forget} rounded p-3 bg-white`}>
                    <h2 className="text-black mb-4">
                        Forgot your password?
                    </h2>
                    <ForgetForm></ForgetForm>
                </div>
            </div>
        </div>
    )
}

function ForgetForm() {
    const schema = Yup.object().shape({
        email: Yup.string().email("Please enter a valid email").required()
    });
    return (
    <Formik
        validationSchema={schema}
            onSubmit={console.log}
            initialValues={{
                email: ''
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
                <div className="d-grid gap-2 pt-2 mt-2">
                    <Button
                        className="bg-dark border-dark"
                        type="submit"
                    ><h3>Send email</h3></Button>
                </div>
            </Form>
        )}
    </Formik>
)
}