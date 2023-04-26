import React, { useState } from "react";
import "./Modal.css";

export default function Modal(props) {
  const [modal, setModal] = useState(false);
 
  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <img 
        src={props.imageUrlSmall} 
        alt={props.imageAlt} 
        style= {{ height: '300px', objectFit: 'cover' }}
        onClick={toggleModal}
        />

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            `<img src={props.imageUrlFull} alt={props.imageAlt} width="100%" />
          </div>
        </div>
      )}
    </>
  );
}