import React, { useState, useEffect } from 'react';
import '.././app.css';

const Korzinka = () => {
  const [basketData, setBasketData] = useState([]);
  const [basketTotal, setBasketTotal] = useState(0);

  useEffect(() => {
    const savedBasket = JSON.parse(localStorage.getItem('basket')) || [];
    setBasketData(savedBasket);
    calculateTotal(savedBasket);
  }, []);

  const updateBasketData = (newBasketData) => {
    setBasketData(newBasketData);
    localStorage.setItem('basket', JSON.stringify(newBasketData));
    calculateTotal(newBasketData);
  };

  const calculateTotal = (basket) => {
    const total = basket.reduce((sum, item) => sum + item.price * item.son, 0);
    setBasketTotal(total);
  };

  const removeFromBasket = (id) => {
    const updatedBasket = basketData.filter((item) => item.id !== id);
    updateBasketData(updatedBasket);
  };

  return (
    <div className="korzinka">
      <h2 className="cart-title">Buyurtma savati</h2>
      {basketData.length === 0 ? (
        <p>SAVATDA HOZIRCHA BUYURTMA YO`Q</p>
      ) : (
      <ul className="cart-items">
        {basketData.map((item) => (
          <li key={item.id} className="cart-item">
            {/* <img src={item.image} alt={item.title} className="item-image" /> */}
            <div className="item-details">
              <h3 className="item-title">{item.title}</h3>
              <img className='cart_oimg' src={item.image} alt={item.title} />
              <p className="item-price">Narxi: {item.price}.000 UZS</p>
              <p className="item-quantity">Soni:1</p>
              <button onClick={() => removeFromBasket(item.id)} className="remove-button">
                O`chirish`
              </button>
            </div>
          </li>
        ))}
      </ul>)}
    </div>
  );
};

export default Korzinka;
