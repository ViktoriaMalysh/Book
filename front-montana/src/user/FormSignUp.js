import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSignUp } from "../redux/actionUsers";
import { useNavigate } from "react-router";
import { SHOW_ALERT, SUCCESS } from "../redux/types";
import "./auth.css";
import { Form, Col, Row, InputGroup } from "react-bootstrap";
import { useFormik } from "formik";

function FormSignUp() {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const navigate = useNavigate();
  const [check, setCheck] = useState(false);

  useEffect(() => {
    if (store.users.success) {
      setTimeout(() => {
        navigate("/home");
        dispatch({ type: SUCCESS, payload: false });
      }, 1000);
    }
  }, [store.users.success]);

  const handleSignUp = () => {
    console.log("handleSignUp", formik.values);

    // const user = {
    //   name: name,
    //   surname: surname,
    //   dateOfBirth: dataOfBirth,
    //   gender: gender,
    //   country: country,
    //   email: email,
    //   password: password,
    // };
    // dispatch(fetchSignUp(user));
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      dataOfBirth: "",
      gender: "",
      country: "",
      email: "",
      password: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.firstName) {
        errors.firstName = "Required";
      } else if (values.firstName.length > 15) {
        errors.firstName = "Must be 15 characters or less";
      }

      if (!values.lastName) {
        errors.lastName = "Required";
      } else if (!/^[A-Z]+$/i.test(values.lastName)) {
        errors.lastName = "First letter must be capitalized";
      } else if (values.lastName.length > 20) {
        errors.lastName = "Must be 20 characters or less";
      }

      if (!values.country) {
        errors.country = "Required";
      }

      if (!values.dataOfBirth) {
        errors.dataOfBirth = "Required";
      }

      if (!values.gender) {
        errors.gender = "Required";
      }

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
        name: values.firstName,
        surname: values.lastName,
        dateOfBirth: values.dataOfBirth,
        gender: values.gender,
        country: values.country,
        email: values.email,
        password: values.password,
      };
      dispatch(fetchSignUp(user));
    },
  });

  return (
    <div>
      <Form noValidate onSubmit={formik.handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} xl="4" sm="4" xs={{ span: 8, offset: 2 }}  controlId="validationFormik01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              placeholder="First name"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              isValid={formik.touched.firstName && !formik.errors.firstName}
              isInvalid={!!formik.errors.firstName}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.firstName}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} xl="4" sm="4" xs={{ span: 8, offset: 2 }} controlId="validationFormik02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              isValid={formik.touched.lastName && !formik.errors.lastName}
              isInvalid={!!formik.errors.lastName}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.lastName}
            </Form.Control.Feedback>
          </Form.Group>
          
          <Form.Group as={Col} xl="4" sm="4" xs={{ span: 8, offset: 2 }} controlId="validationFormikUsername">
            <Form.Label>Country</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                placeholder="Country"
                aria-describedby="inputGroupPrepend"
                name="country"
                value={formik.values.country}
                onChange={formik.handleChange}
                isValid={formik.touched.country && !formik.errors.country}
                isInvalid={!!formik.errors.country}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.country}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>

        <Row className="mb-3">
        <Col xl={{ span: 4, offset: 1 }} sm={{ span: 5 }} xs={{ span: 8, offset: 2 }} >

          <Form.Group controlId="validationFormik03">
            <Form.Label>Gender</Form.Label>

            <Form.Select
              aria-label="Default select example"
              isValid={formik.touched.gender && !formik.errors.gender}
              isInvalid={!!formik.errors.gender}
              onChange={formik.handleChange}
              name="gender"
              value={formik.values.country}
            >
              <option>Choose gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {formik.errors.gender}
            </Form.Control.Feedback>
          </Form.Group>
          </Col>
          <Col xl={{ span: 4, offset: 2 }} sm={{ span: 5 }} xs={{ span: 8, offset: 2 }}>

          <Form.Group controlId="validationFormik03">
            <Form.Label>Date of birth</Form.Label>
            <Form.Control
              type="date"
              name="dataOfBirth"
              selected={formik.values.dataOfBirth}
              isInvalid={!!formik.errors.dataOfBirth}
              isValid={formik.touched.dataOfBirth && !formik.errors.dataOfBirth}
              onChange={formik.handleChange}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.dataOfBirth}
            </Form.Control.Feedback>
          </Form.Group>
          </Col>

        </Row>

        <Row className="mb-3">
          <Form.Group  as={Col} xl="6" xs={{ span: 8, offset: 2 }} controlId="validationFormik03">
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

          <Form.Group as={Col} xl="6" xs={{ span: 8, offset: 2 }} controlId="validationFormik04">
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
            <Form.Text id="passwordHelpBlock" muted>
              Your password must be 8-20 characters long, contain letters and
              numbers, and must not contain spaces, special characters, or
              emoji.
            </Form.Text>
          </Form.Group>
        </Row>
        <button
          className="button-auth"
          type="submit"
          disabled={formik.errors.lastName}
        >
          Authorization
        </button>{" "}
      </Form>
    </div>
  );
}

export default FormSignUp;
