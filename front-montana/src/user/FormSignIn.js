import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSignIn } from "../redux/actionUsers";
import { useNavigate } from "react-router";
import { SHOW_ALERT, SUCCESS } from "../redux/types";
import "./signIn.css";
import { Form, Col, Row, InputGroup } from "react-bootstrap";
import { useFormik } from "formik";

function FormSignIn() {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const navigate = useNavigate();

  useEffect(() => {
    if (store.users.success) {
      setTimeout(() => {
        navigate("/");
        dispatch({ type: SUCCESS, payload: false });
      }, 1000);
    }
  }, [store.users.success]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      const errors = {};

      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }

      if (!values.password) {
        errors.password = "Required";
      } else if (
        !/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})$/i.test(
          values.email
        )
      ) {
        errors.email = "Invalid email address";
      }
      return errors;
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log("values", values);
      const user = {
        email: values.email,
        password: values.password,
      };
      dispatch(fetchSignIn(user));
    },
  });

  return (
    <div>
      <Form noValidate onSubmit={formik.handleSubmit}>
        <Row className="mb-3" className="form-login">
          <Form.Group
            as={Col}
            sm={{ span: 8, offset: 0 }}
            lg={{ span: 6, offset: 0 }}
            xl={{ span: 5, offset: 0 }}
            xs={{ span: 10, offset: 0 }}
            controlId="validationFormik03"
          >
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              isValid={formik.touched.email && !formik.errors.email}
              isInvalid={!!formik.errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.email}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            sm={{ span: 8, offset: 0 }}
            lg={{ span: 6, offset: 0 }}
            xl={{ span: 5, offset: 0 }}
            xs={{ span: 10, offset: 0 }}
            controlId="validationFormik04"
          >
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              isInvalid={!!formik.errors.password}
              isValid={formik.touched.password && !formik.errors.password}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.password}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <button
          className="button-sign-in"
          type="submit"
          // disabled={formik.errors.lastName}
        >
          Sign In
        </button>{" "}
        <Row>
          <Form.Label 
            column="lg" 
            className='label-sign-in'
            as={Col} 
            lg={{ span: 8, offset: 0 }}
            sm={{ span: 6, offset: 1 }}
            xs={{ span: 8, offset: 0 }}
          >
            Don`t have any account?
          </Form.Label>
        </Row>
        <button
          className="button-sign-up-reference"
          type="submit"
          onClick={() => navigate("/sign_up")}
        >
          Sign Up
        </button>

      </Form>
    </div>
  );
}

export default FormSignIn;
