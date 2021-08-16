import ReactModal from "react-modal";
import React from "react";
import ReactDOM from "react-dom";
import { Button } from "react-bootstrap";
import Form from "../pages/form";

export default class Modal extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div>
        <Button variant="primary" onClick={this.handleOpenModal}>
          Lets Get Started!
        </Button>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="onRequestClose Example"
          onRequestClose={this.handleCloseModal}
          shouldCloseOnOverlayClick={true}
        >
          <Form />
          <Button variant="primary" onClick={this.handleCloseModal}>
            Close Modal
          </Button>
        </ReactModal>
      </div>
    );
  }
}
