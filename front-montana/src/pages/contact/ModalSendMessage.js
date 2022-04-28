import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ROOM_DATA, SHOW_MODAL } from "../../../redux/types";

function ModalSendMessage(show) {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(show);

  const handleClose = () => {
    // dispatch({ type: SHOW_MODAL, payload: false });
    setShowModal(false);
  };

  return (
    <Modal
      show={showModal}
      onHide={() => handleClose()}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header>Thank you!</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          Your subscription has been confirmed
        </Modal.Description>
      </Modal.Content>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => handleClose()}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>

    //   <Modal
    //   centered={false}
    //   open={open}
    //   onClose={() => setOpen(false)}
    //   onOpen={() => setOpen(true)}
    //   trigger={<Button>Show Modal</Button>}
    // >
    //   <Modal.Header>Thank you!</Modal.Header>
    //   <Modal.Content>
    //     <Modal.Description>
    //       Your subscription has been confirmed
    //     </Modal.Description>
    //   </Modal.Content>
    //   <Modal.Actions>
    //     <Button onClick={() => setOpen(false)}>OK</Button>
    //   </Modal.Actions>
    // </Modal>
  );
}

export default ModalSendMessage;
