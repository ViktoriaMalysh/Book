import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Card, Row, Spinner, Button, Modal } from "react-bootstrap";

import {
  fetchChangePhone,
  fetchChangePass,
  fetchVerifyToken,
} from "../redux/actionUsers";
import "./BookRooms.css";
// import "../publicEmail.css";
import { CHANGE, CURRENT_PRICE } from "../redux/types";
import StripeContainer from "./StripeContainer";
import { deleteTickets } from "../redux/actionTickets";

function BoughtRooms() {
  const store = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const [phone, setPhone] = useState(store.users.userPhone);
  const [password, setPassword] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const cancelBook = (id) => {
    dispatch(deleteTickets(id));
  };

  const buyTicket = (id, price) => {
    dispatch({ type: CURRENT_PRICE, payload: price });

    setShow(true);
  };

  // useEffect(() => {
  //   if (store.users.flag) {
  //     const changePhone = {
  //       id: store.users.userId,
  //       phone: phone !== "" ? phone : store.users.userPhone,
  //     };
  //     dispatch(fetchChangePhone(changePhone));
  //   }
  // }, [store.users.flag]);

  // useEffect(() => {
  //   if (store.users.change) {
  //     const token = localStorage.getItem("token");
  //     dispatch(fetchVerifyToken(token));
  //     setTimeout(() => {
  //       dispatch({ type: CHANGE, payload: false });
  //     }, 1000);
  //   }
  // }, [store.users.change]);

  // const handleUpdate = () => {
  //   setShow(false);
  //   dispatch(fetchChangePass(store.users.userId, password));
  // };

  return (
    <div className="div-basket-sett-block3">
      <Modal
        show={show}
        onHide={() => handleClose()}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">Warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <StripeContainer />
        </Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
      </Modal>

      <div className="div-profile-tickets">
        <Row xs={1} md={2} className="g-4 ">
          {store.tickets.showMyTickets.map((item, key) => (
            <Card className="card-ticket-profile" key={item.id}>
              <Card.Img variant="top" src={item.url} />
              <Card.Body>
                <Card.Title>{item.country}</Card.Title>
                <Card.Text>
                  Address:{" "}
                  <span style={{ fontStyle: "italic" }}>{item.address}</span>
                </Card.Text>
                <Card.Text>
                  Locality:{" "}
                  <span style={{ fontStyle: "italic" }}>{item.locality}</span>
                </Card.Text>
                <Card.Text>
                  Price:{" "}
                  <span style={{ fontStyle: "italic" }}>
                    {"$" + item.price}
                  </span>
                </Card.Text>
                <button
                  className="button-cancel-book"
                  onClick={() => cancelBook(item.id)}
                >
                  Cancel Book
                </button>

              </Card.Body>
            </Card>
          ))}
        </Row>
      </div>
      {/* <div className="div-button-delete">
          <button
            className="button-settings"
            onClick={() => navigate("/settings/profile")}
          >
            Profile Settings
          </button>
        </div> */}
      {/* </div> */}
    </div>
  );
}

export default BoughtRooms;
