import ReactModal from "react-modal";
import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Form from "../pages/form";
import close from "../icons/xmark-solid.svg";
export default function ServiceModal(props) {
  const [state, setState] = useState({ showModal: false });
  const windowSize = window.innerWidth;
  const [modalWidth, setModalWidth] = useState("40vw");

  useEffect(() => {
    windowSize < 600 ? setModalWidth("80vw") : setModalWidth("35vw");
  }, [windowSize]);
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
        Contact Us!
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
