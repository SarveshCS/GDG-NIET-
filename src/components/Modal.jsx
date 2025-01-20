import React from "react"
import "@/components/CompCss/Modal.css"

function Modal({ image, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <img src={image.src || "/placeholder.svg"} alt={image.alt} />
        <p className="image-description">{image.alt}</p>
      </div>
    </div>
  )
}

export default Modal

