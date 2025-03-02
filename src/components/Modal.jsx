import React from "react";
import { FiX } from "react-icons/fi";
import "@/components/CompCss/Modal.css";

function Modal({ image, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          <FiX />
        </button>
        <img src={image.src || "/placeholder.svg"} alt={image.alt} />
        <p className="image-description">{image.alt}</p>
      </div>
    </div>
  );
}

export default Modal;
