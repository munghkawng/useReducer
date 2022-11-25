import { useEffect } from "react";

function Modal({ modalContent, closeModal }) {
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 4000);
  });
  return (
    <div className="modal">
      <p>{modalContent}</p>
    </div>
  );
}

export default Modal;
