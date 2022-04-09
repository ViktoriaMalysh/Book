import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Spinner, Button, Modal } from "react-bootstrap";
import { useSelector, connect, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./profile.css";
// import { deleteTickets, showMyTickets } from "../redux/actionTickets";
import { CURRENT_PRICE, DELETE } from "../redux/types";
import StripeContainer from "../payment/StripeContainer";
// import 'semantic-ui-css/semantic.min.css'
import { Segment, Table, Label } from "semantic-ui-react";

function Profile() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const loading = useSelector((state) => state.app.loading);
  const [more, setMore] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    // dispatch(showMyTickets(store.users.userId));
  }, []);

  useEffect(() => {
    if (store.tickets.delete) {
      // dispatch(showMyTickets(store.users.userId));
      // setTimeout(() => {
      // dispatch({ type: DELETE, payload: false });
      // }, 600);
    }
  }, [store.tickets.delete]);

  if (loading) {
    return (
      <div className="form1111">
        <Spinner animation="border" variant="danger" role="status"></Spinner>
      </div>
    );
  }
  const totalPrice = 58;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const cancelBook = (id) => {
    // dispatch(deleteTickets(id));
  };

  const handleMore = () => {
    console.log(more);
    if (!more) setMore(true);
    else if (more) setMore(false);
  };

  const buyTicket = (id, price) => {
    // dispatch({ type: CURRENT_PRICE, payload: price });

    setShow(true);
  };

  return (
    <div className="div-page-profile">
      <img
        className="img-fon"
        src="https://images.1plus1.ua/nocache/uploads/site/000/542/082/ce65ead4276a190189f837271050a36f.jpg?v=1565265103"
      />
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
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      <Segment raised className="div-profile ">
        <Label
          as="a"
          color={store.users.userGender === "female" ? "pink" : "blue"}
          className="label-gender"
          ribbon
        >
          {store.users.userGender}
        </Label>
        <img
          alt="Header"
          className="img-header"
          src="https://images.1plus1.ua/nocache/uploads/site/000/542/082/ce65ead4276a190189f837271050a36f.jpg?v=1565265103"
        />
        <>
          <img
            alt="Avatar"
            className="img-avatar"
            src="https://okeygeek.ru/wp-content/uploads/2020/03/no_avatar.png"
          />
        </>

        <div className="div-myself">
          <div className="div-name">
            <p className="p-profile-name">
              {store.users.userFirstName}
              {"  "}
              {store.users.userLastName}
            </p>
            <p className="p-profile-country">{store.users.userCountry}</p>
          </div>

          <div className="div-profile-button-sett">
            <button
              variant="warning"
              className="button-settings"
              onClick={() => navigate("/settings/profile")}
            >
              Profile Settings
            </button>
          </div>

          <div className="div-about">
            <Table color="teal">
              <Table.Body>
                <Table.Row>
                  <Table.Cell>Gender</Table.Cell>
                  <Table.Cell>{store.users.userGender}</Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell>Email</Table.Cell>
                  <Table.Cell>{store.users.userEmail}</Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell>Date Of Birth</Table.Cell>
                  <Table.Cell>{store.users.userDateOfBirth}</Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell>Phone Number</Table.Cell>
                  <Table.Cell>{store.users.userPhone}</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </div>
        </div>
      </Segment>
    </div>
  );
}

function mapStateToProps(state) {
  return { store: state };
}

export default connect(mapStateToProps)(Profile);
