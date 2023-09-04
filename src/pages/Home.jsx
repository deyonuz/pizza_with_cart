import { useState } from "react"
import Modal from "../components/Modal"
import { data } from "../components/Utils/data"



export default function Home() {
  const[openModal, setOpenModal] = useState(false ) 
  const[onePizza, setOnePizza] = useState({} ) 
  const openModalFunc = (ids) => {
    setOpenModal(true)
    console.log(data.find((pizza) => pizza.id === ids ));
    setOnePizza(data.find((pizza) => pizza.id === ids ));
  };

  return (
    <div className="main-wrap">
      {openModal && <Modal onePizza={onePizza}  setOpenModal={setOpenModal} />}
      
      {data?.map((pizza, index) => (
        <div key={index} className="card" onClick={() => openModalFunc(pizza.id)}>
          <div className="mains">
          <div className="card-img">
          <img className="pitsaimg" src={pizza.image} alt="" />
          </div>
          <h3 className="card-title">{pizza.title}</h3>
          <p className="card-desc">{pizza.description}</p>
          </div>
          <h2 className="card-pric">{pizza.price}.000 UZS</h2>

    </div>
        )
        )}
        </div>
  )
}
