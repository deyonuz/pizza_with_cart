import React from 'react';
import Korzinka from './korzinka'; // Import the korzinka component

const Modal = ({ setOpenModal, onePizza }) => {
  const savatga = (event) => {
    event.preventDefault();
    const { id, image, title, price, son } = onePizza;
    const oldBasket = JSON.parse(localStorage.getItem('basket')) || [];
    const newItem = { id, image, title, price, son };
    const updatedBasket = [...oldBasket, newItem];
    localStorage.setItem('basket', JSON.stringify(updatedBasket));

    // Close the modal if you want
    setOpenModal(false);
  };

  return (
    <div className="modal-back">
      <div className='modal'>
        <button onClick={() => setOpenModal(false)}>  <p>exit</p></button>
        <div className="modal-main">
          <div className="modal-main_img">
            <img src={onePizza.image} alt="" />
          </div>
          <div className="modal-main_text">
            <div className="desc">
              <h1>{onePizza.title}</h1>
              <p>{onePizza.description}</p>
            </div>
            <div className="prices">
              <h2>{onePizza.price}.000 UZS</h2>
            </div>
            <button className="savatga" onClick={savatga}> Savatga qo'shish </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
