import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSignUp } from "../redux/actionUsers";
import { useNavigate } from "react-router";
import { SHOW_ALERT, SUCCESS } from "../redux/types";
import "./auth.css";
import { Checkbox, Popup, Message, Grid } from "semantic-ui-react";

function FormSignUp() {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const navigate = useNavigate();

  var validateNameSurname = /([A-Z])\w+/g;
  var validatePassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

  const [check, setCheck] = useState(false);
  const [err, setErr] = useState(false);
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [gender, setGender] = useState("");
  const [dataOfBirth, setDataOfBirth] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (store.users.success) {
      setTimeout(() => {
        navigate("/home");
        dispatch({ type: SUCCESS, payload: false });
      }, 1000);
    }
  }, [store.users.success]);

  useEffect(() => {
    if (check) {
      setErr(false);
    }
  }, [check]);



  const handleSubmit = (event) => {

    if()
    // event.preventDefault();
    if (
      check &&
      name !== "" &&
      surname !== "" &&
      dataOfBirth !== "" &&
      gender !== "" &&
      country !== "" &&
      email !== "" &&
      password !== ""
    ) {
      const user = {
        name: name,
        surname: surname,
        dateOfBirth: dataOfBirth,
        gender: gender,
        country: country,
        email: email,
        password: password,
      };
      dispatch(fetchSignUp(user));
    } else {
      setErr(true);
      console.log("fghjk");
      setMessage("Сheckbox must be checked");
    }
  };

  return (
    <div>
      <div className="div-inline-1">
        <div className="div-inline-block11">
          <p className="p-sign-up">Name </p>
          <input
            type="text"
            className="input-sign-up-name"
            name="name"
            pattern={validateNameSurname}
            title="error"
            onChange={(e) => setName(e.target.value)}
          ></input>
          <Popup
            content="Hello"
            // eventsEnabled={eventsEnabled}
            on="click"
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            // trigger={<Button content="A trigger" />}
          />
        </div>
        <div className="div-inline-block12">
          <p className="p-sign-up">Surname </p>
          <input
            type="text"
            className="input-sign-up-name"
            name="surname"
            pattern={validateNameSurname}
            onChange={(e) => setSurname(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="div-inline-2">
        <div className="div-inline-block21">
          <p className="p-sign-up">Gender</p>
          <select
            name="select"
            className="input-sign-up-block2"
            onChange={(e) => setGender(e.target.value)}
          >
            <option className="option" value="male">
              Male
            </option>
            <option className="option" value="female">
              Female
            </option>
          </select>
        </div>
        <div className="div-inline-block22">
          <p className="p-sign-up">Date of Birth</p>
          <input
            type="date"
            id="start"
            className="input-sign-up-block2"
            name="trip-start"
            min="1960-01-01"
            max="2020-12-31"
            onChange={(e) => setDataOfBirth(e.target.value)}
          ></input>{" "}
        </div>
        <div className="div-inline-block23">
          <p className="p-sign-up">Country </p>
          <input
            type="text"
            className="input-sign-up-block2"
            name="country"
            placeholder="Country"
            onChange={(e) => setCountry(e.target.value)}
          ></input>
        </div>
      </div>

      <div className="div-inline-1">
        <div className="div-inline-block11">
          <p className="p-sign-up">Email </p>
          <input
            type="email"
            className="input-sign-up-block3"
            name="email"
            pattern="email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <p></p>
        </div>
        <div className="div-inline-block12">
          <p className="p-sign-up">Password </p>
          <input
            type="password"
            className="input-sign-up-block3"
            name="password"
            pattern={validatePassword}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <p className="p-sign-up-title">
            Password must be least 8 characters, 1 uppercase letter, 1 lowercase
            letter and 1 number. Can contain special characters
          </p>
        </div>
      </div>

      <Checkbox
        className="checkbox-title"
        label="I agree with the company rules MONTANA"
        onClick={() => setCheck(!check)}
      />
      <Grid padded>
        <Grid.Column width={14}>
          <Message
            error
            hidden={!err}
            header="Authorization Forbidden"
            content={message}
          />
        </Grid.Column>
      </Grid>

      <div className="buttform-auth">
        <button
          className="button-auth"
          value={check}
          type="submit"
          onClick={() => handleSubmit()}
        >
          Authorization
        </button>
      </div>
    </div>
  );
}

export default FormSignUp;
