import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSignUp } from "../redux/actionUsers";
import { useNavigate } from "react-router";
import { SUCCESS } from "../redux/types";

function FormSignUp() {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [gender, setGender] = useState("");
  const [dataOfBirth, setDataOfBirth] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState(0);
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

  const handleSubmit = (event) => {
    // event.preventDefault();
    const user = {
      name: name,
      surname: surname,
      dateOfBirth: dataOfBirth,
      gender: gender,
      country: country,
      phone: phone,
      email: email,
      password: password,
    };
    dispatch(fetchSignUp(user));
  };

  return (
    <div>
      <div className="div-inline">
        <div className="div-inline-block1">
          <p className="p-sign-up">Name </p>
          <input
            type="text"
            className="input-sign-up"
            name="name"
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className="div-inline-block2">
          <p className="p-sign-up">Surname </p>
          <input
            type="text"
            className="input-sign-up"
            name="surname"
            onChange={(e) => setSurname(e.target.value)}
          ></input>
        </div>
      </div>
      <p className="p-sign-up">Gender </p>
      <select
        name="select"
        className="input-sign-up"
        onChange={(e) => setGender(e.target.value)}
      >
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <p className="p-sign-up">Country </p>
      <input
        type="text"
        className="input-sign-up"
        name="country"
        onChange={(e) => setCountry(e.target.value)}
      ></input>
      <p className="p-sign-up">Phone </p>
      <input
        type="number"
        className="input-sign-up"
        name="phone"
        onChange={(e) => setPhone(e.target.value)}
      ></input>
      <p className="p-sign-up">Date of Birth</p>
      <input
        type="date"
        id="start"
        className="input-data"
        name="trip-start"
        min="1960-01-01"
        max="2018-12-31"
        onChange={(e) => setDataOfBirth(e.target.value)}
      ></input>{" "}
      <p className="p-sign-up">Email </p>
      <input
        type="email"
        className="input-sign-up"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <p className="p-sign-up">Password </p>
      <input
        type="password"
        className="input-sign-up"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <div className="buttform-auth">
        <button
          className="button-auth"
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
