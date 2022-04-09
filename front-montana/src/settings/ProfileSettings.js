import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Spinner, Button, Form, Col } from "react-bootstrap";
import { useSelector, connect, useDispatch } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./profileSettings.css";
import { deleteTickets, showMyTickets } from "../redux/actionTickets";
import { DELETE } from "../redux/types";

import NavBar from "../components/NavBar";
import PublicProfile from "./PublicProfile";
import { Modal } from "bootstrap";
import { Link } from "react-router-dom";
import PublicEmail from "./PublicEmail";
import PublicPassword from "./PublicPassword";
import PublicPhone from "./PublicPhone";
import PublicAccount from "./PublicAccount";
import { Segment } from "semantic-ui-react";

function ProfileSettings() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleChange = () => {
    setShow(false);
  };

  return (
    <div className="div-change-profile">
      <img
        className="img-sett-fon"
        src="https://images.1plus1.ua/nocache/uploads/site/000/542/082/ce65ead4276a190189f837271050a36f.jpg?v=1565265103"
      />
      <Segment 
        as='div'
        className="div-block-sett"
        raised
      >
        {/* <div className="div-prof-sett-block1">
          <img
            alt="Avatar"
            className="img-avatar-block1"
            src="https://okeygeek.ru/wp-content/uploads/2020/03/no_avatar.png"
          />
          <div className="div-block1-title">
            <p className="p-block1-title">
              {store.users.userName} {store.users.userSurname}
            </p>
            <p className="p-block1-text">Your personal account</p>
          </div>
        </div> */}

        <button
          className="button-prof-sett-block1"
          onClick={() => navigate("/profile")}
        >
          Go to your personal profile
        </button>
        {/* <div className="div-profile-settings"> */}
          <div className="nav-change-profile">
            <NavBar />
          </div>
          <div className='div-profile-all'>
          <Routes>
            <Route path="profile" element={<PublicProfile />} />
            <Route path="email" element={<PublicEmail />} />
            <Route path="password" element={<PublicPassword />} />
            <Route path="phone" element={<PublicPhone />} />
            <Route path="account" element={<PublicAccount />} />
          </Routes>
          </div>
          {/* <PublicProfile /> */}
        {/* </div> */}
      </Segment>
    </div>
  );
}

function mapStateToProps(state) {
  return { store: state };
}

export default connect(mapStateToProps)(ProfileSettings);
