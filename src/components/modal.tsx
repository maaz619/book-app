import React from "react";
import Address from "./address";
import "./styles/modal.css";

const Modal = ({ closeModal }) => {
  return (
    <div className="modal">
      <div className="modal-container">
        <div className="modal-close-right">
          <button
            onClick={() => closeModal(false)}
            className="modal-close-button"
          >
            X
          </button>
        </div>
        <Address />
      </div>
    </div>
  );
};

export default Modal;
