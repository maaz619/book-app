import React, { useState } from "react";
import Address from "./address";
import "./styles/modal.css";
import Lottie from "react-lottie-player";
import animationData from "../Lottie_files/order.json";
import { Props } from "../interfaces";

const Modal: React.FC<Props> = ({ closeModal, modal }) => {
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
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.5em",
                fontWeight: "550",
              }}
            >
              <span>Thank you</span>
              <div style={{ paddingTop: ".5rem" }}>
                Order <span style={{ color: "#15803d" }}>Placed</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
