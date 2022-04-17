import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ROOM_DATA, SHOW_MODAL } from "../../../redux/types";

function ModalBookSaleRoom() {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch({ type: SHOW_MODAL, payload: false });
  }

  const handleBookTicket = () => {
    // dispatch(
    //   addTicket(
    //     store.users.userId,
    //     ticket.country,
    //     ticket.address,
    //     ticket.locality,
    //     ticket.price,
    //     ticket.url
    //   )
    // );
    // setShow(false);    
    dispatch({ type: ROOM_DATA, payload: {} });
    dispatch({ type: SHOW_MODAL, payload: false });
  };

  return (
    <Modal
      show={store.saleRoom.show}
      onHide={() => handleClose()}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title className="modal-title">{store.saleRoom.roomData.country}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img alt="Header" className="img-hotel" src={store.saleRoom.roomData.url} />
        <div className="div-body">
          <p className="p-book-hotel">
            Address: <span style={{ fontStyle: "italic" }}>{store.saleRoom.roomData.address}</span>
          </p>
          <p className="p-book-hotel">
            Locality:{" "}
            <span style={{ fontStyle: "italic" }}>{store.saleRoom.roomData.locality}</span>
          </p>
          <p className="p-book-hotel">
            Price After:{" "}
            <span style={{ fontStyle: "italic" }}>$ {store.saleRoom.roomData.priceAfter}</span>
          </p>
          <p className="p-book-hotel">
            Price Before:{" "}
            <span style={{ fontStyle: "italic" }}>$ {store.saleRoom.roomData.priceBefore}</span>
          </p>
          <p className="p-book-hotel">
            Discount:{" "}
            <span style={{ fontStyle: "italic" }}>$ {store.saleRoom.roomData.discount}</span>
          </p>
          <p className="text-message">
            If all the data is correct, then confirm the reservation:
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => handleClose()}>
          Cancel
        </Button>
        <Button variant="primary" onClick={() => handleBookTicket()}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalBookSaleRoom;
