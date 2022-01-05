import React, { useState } from "react";
import { relative } from "path/posix";
import Address from "./address";
import "./styles/modal.css";
import Lottie from "react-lottie-player";
import animationData from "../Lottie_files/order.json";

const Modal = ({ closeModal, modal }) => {
  const [open, setOpen] = useState<boolean>(modal);
  return (
    <div onClick={() => closeModal(false)} className="modal">
      <div
        onClick={(e: React.BaseSyntheticEvent) => {
          e.stopPropagation();
        }}
        className="modal-container"
      >
        <div className="modal-close-right">
          <button
            onClick={() => closeModal(false)}
            className="modal-close-button"
          >
            X
          </button>
        </div>
        {open ? (
          <Address closeModal1={setOpen} open={open} />
        ) : (
          <div>
            <Lottie play loop={2} animationData={animationData} />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.5em",
              }}
            >
              {"Order "}
              <span style={{ color: "#15803d" }}> Placed</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
