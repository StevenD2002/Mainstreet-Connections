import ReactModal from "react-modal";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "../pages/form";
import close from "../icons/xmark-solid.svg";
export default function ServiceModal(props) {
  const [state, setState] = useState({ showModal: false });
  const windowSize = window.innerWidth;
  const [modalWidth, setModalWidth] = useState(
    windowSize < 600 ? "80vw" : "40vw"
  );
  const handleOpenModal = () => {
    setState({ showModal: true });
  };
  const handleCloseModal = () => {
    setState({ showModal: false });
  };
  console.log(modalWidth);
  return (
    <div>
      <Button variant="primary" onClick={handleOpenModal}>
        Lets Get Started!
      </Button>
      <ReactModal
        isOpen={state.showModal}
        contentLabel="onRequestClose Example"
        onRequestClose={handleCloseModal}
        shouldCloseOnOverlayClick={true}
        style={{
          content: {
            width: `${modalWidth}`,
            margin: "auto",
            borderRadius: "9px",
            zIndex: "2px",
          },
        }}
      >
        <img
          src={close}
          alt="close"
          className="close-icon"
          onClick={handleCloseModal}
        />

        <Form />
      </ReactModal>
    </div>
  );
}
