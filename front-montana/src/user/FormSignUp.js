import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSignUp } from "../redux/actionUsers";
import { useNavigate } from "react-router";
import { SHOW_ALERT, SUCCESS } from "../redux/types";
import "./auth.css";
import {
  Popover,
  Overlay,
  Button,
  Form,
  Col,
  Row,
  InputGroup,
} from "react-bootstrap";
import { Formik } from "formik";

import { Checkbox, Popup, Message, Grid } from "semantic-ui-react";

function FormSignUp() {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const navigate = useNavigate();
  const [check, setCheck] = useState(false);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [gender, setGender] = useState("");
  const [dataOfBirth, setDataOfBirth] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // useEffect(() => {
  //   // Submit the form imperatively as an effect as soon as form values.token are 6 digits long
  //   if (values.token.length === 6) {
  //     submitForm();
  //   }
  // }, [values, submitForm]);

  useEffect(() => {
    if (store.users.success) {
      setTimeout(() => {
        navigate("/home");
        dispatch({ type: SUCCESS, payload: false });
      }, 1000);
    }
  }, [store.users.success]);

  const handleSubmit1 = (event) => {
    console.log("hello", name, dataOfBirth);
  };

  // const handleSubmit = (event) => {
  //   const errPassword = /\s/.test("стр окDа");
  //   console.log("a", errPassword);
  //   // if()
  //   // event.preventDefault();
  //   if (
  //     !check
  //     // name !== "" &&
  //     // surname !== "" &&
  //     // dataOfBirth !== "" &&
  //     // gender !== "" &&
  //     // country !== "" &&
  //     // email !== "" &&
  //     // password !== ""
  //   ) {
  //     setErr(true);
  //     console.log("fghjk");
  //     setMessage("Сheckbox must be checked");
  //   } else if (name === "" || errPassword) {
  //     setShow(true);
  //     // setTarget(event.target);
  //   } else {
  //     const user = {
  //       name: name,
  //       surname: surname,
  //       dateOfBirth: dataOfBirth,
  //       gender: gender,
  //       country: country,
  //       email: email,
  //       password: password,
  //     };
  //     dispatch(fetchSignUp(user));
  //   }
  // };

  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          dataOfBirth: '',
          gender: "",
          country: "",
          email: "",
          password: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.firstName) {
            errors.firstName = "Required";
          } else if (values.firstName.length > 15) {
            errors.firstName = "Must be 15 characters or less";
          }

          if (!values.lastName) {
            errors.lastName = "Required";
          } else if (
            !/^[A-Z]+$/i.test(values.lastName)
          ) {
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
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isValid,
          errors,
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationFormik01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={values.firstName}
                  onChange={handleChange}
                  isValid={touched.firstName && !errors.firstName}
                  isInvalid={!!errors.firstName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.firstName}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationFormik02">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={values.lastName}
                  onChange={handleChange}
                  isValid={touched.lastName && !errors.lastName}
                  isInvalid={!!errors.lastName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.lastName}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationFormikUsername">
                <Form.Label>Country</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    placeholder="Country"
                    aria-describedby="inputGroupPrepend"
                    name="country"
                    value={values.country}
                    onChange={handleChange}
                    isValid={touched.country && !errors.country}
                    isInvalid={!!errors.country}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.country}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationFormik03">
                <Form.Label>Gender</Form.Label>

                <Form.Select 
                  aria-label="Default select example"
                  isValid={touched.gender && !errors.gender}
                  isInvalid={!!errors.gender}
                  onChange={handleChange}
                  name="gender"
                  value={values.country}
                >
                  <option>Choose gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.gender}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationFormik03">
                <Form.Label>Date of birth</Form.Label>
                <Form.Control
                  type="date"
                  name="dataOgBirth"
                  // value={}
                  selected={values.dataOfBirth}
                  isInvalid={!!errors.dataOfBirth}
                  isValid={touched.dataOfBirth && !errors.dataOfBirth}
                  onChange={handleChange}
                  />
                <Form.Control.Feedback type="invalid">
                  {errors.dataOfBirth}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationFormik03">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isValid={touched.email && !errors.email}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="3" controlId="validationFormik04">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  isInvalid={!!errors.password}
                  isValid={touched.password && !errors.password}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
                <Form.Text id="passwordHelpBlock" muted>
                  Your password must be 8-20 characters long, contain letters
                  and numbers, and must not contain spaces, special characters,
                  or emoji.
                </Form.Text>
              </Form.Group>
            </Row>
            <button
              className="button-auth"
              value={check}
              type="submit"
              onClick={() => handleSubmit1()}
            >
              Authorization
            </button>{" "}
          </Form>
          //   {/*
          // <div className="div-inline-1">
          //   <div className="div-inline-block11">
          //     <p className="p-sign-up">Name </p>
          //     <input
          //       type="text"
          //       className="input-sign-up-name"
          //       name="name"
          //       pattern={validateNameSurname}
          //       title="error"
          //       onChange={(e) => setName(e.target.value)}
          //     ></input>
          //     <Overlay
          //       show={show}
          //       // target={target}
          //       placement="bottom"
          //       // container={ref}
          //       containerPadding={20}
          //     >
          //       <Popover id="popover-contained">
          //         <Popover.Header as="h3">Popover bottom</Popover.Header>
          //         <Popover.Body>
          //           <strong>Holy guacamole!</strong> Check this info.
          //         </Popover.Body>
          //       </Popover>
          //     </Overlay>
          //   </div>
          //   <div className="div-inline-block12">
          //     <p className="p-sign-up">Surname </p>
          //     <input
          //       type="text"
          //       className="input-sign-up-name"
          //       name="surname"
          //       pattern={validateNameSurname}
          //       onChange={(e) => setSurname(e.target.value)}
          //     ></input>
          //   </div>
          // </div>
          // <div className="div-inline-2">
          //   <div className="div-inline-block21">
          //     <p className="p-sign-up">Gender</p>
          //     <select
          //       name="select"
          //       className="input-sign-up-block2"
          //       onChange={(e) => setGender(e.target.value)}
          //     >
          //       <option className="option" value="male">
          //         Male
          //       </option>
          //       <option className="option" value="female">
          //         Female
          //       </option>
          //     </select>
          //   </div>
          //   <div className="div-inline-block22">
          //     <p className="p-sign-up">Date of Birth</p>
          //     <input
          //       type="date"
          //       id="start"
          //       className="input-sign-up-block2"
          //       name="trip-start"
          //       min="1960-01-01"
          //       max="2020-12-31"
          //       onChange={(e) => setDataOfBirth(e.target.value)}
          //     ></input>{" "}
          //   </div>
          //   <div className="div-inline-block23">
          //     <p className="p-sign-up">Country </p>
          //     <input
          //       type="text"
          //       className="input-sign-up-block2"
          //       name="country"
          //       placeholder="Country"
          //       onChange={(e) => setCountry(e.target.value)}
          //     ></input>
          //   </div>
          // </div>

          // <div className="div-inline-1">
          //   <div className="div-inline-block11">
          //     <p className="p-sign-up">Email </p>
          //     <input
          //       type="email"
          //       className="input-sign-up-block3"
          //       name="email"
          //       pattern="email"
          //       onChange={(e) => setEmail(e.target.value)}
          //     ></input>
          //     <p></p>
          //   </div>
          //   <div className="div-inline-block12">
          //     <p className="p-sign-up">Password </p>
          //     <input
          //       type="password"
          //       className="input-sign-up-block3"
          //       name="password"
          //       pattern={validatePassword}
          //       onChange={(e) => setPassword(e.target.value)}
          //     ></input>
          //     <p className="p-sign-up-title">
          //       Password must be least 8 characters, 1 uppercase letter, 1 lowercase
          //       letter and 1 number. Can contain special characters
          //     </p>
          //   </div>
          // </div>

          // <Checkbox
          //   className="checkbox-title"
          //   label="I agree with the company rules MONTANA"
          //   onClick={() => setCheck(!check)}
          // />
          // <Grid padded>
          //   <Grid.Column width={14}>
          //     <Message
          //       error
          //       hidden={!err}
          //       header="Authorization Forbidden"
          //       content={message}
          //     />
          //   </Grid.Column>
          // </Grid>

          // <div className="buttform-auth">
          //   <button
          //     className="button-auth"
          //     value={check}
          //     type="submit"
          //     onClick={() => handleSubmit()}
          //   >
          //     Authorization
          //   </button>
          // </div> */}
        )}
      </Formik>
    </div>
  );
}

export default FormSignUp;
