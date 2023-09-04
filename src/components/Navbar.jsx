import LOGO from "../assets/logo.svg"
import CART from "../assets/Frame.svg"
import {Link} from "react-router-dom"
export default function Navbar() {
  return (
    <div className="nav-wrap">
     <Link to="/home">
     <div className="nav-logo">
          <img src={LOGO} alt="logo" />
          <div className="nav-title">
            <h1>PIZZABEK</h1>
            <p>eng mazali pitsalar faqatgina bizda</p>
          </div>
      </div>
     </Link>
      <input type="search" placeholder="Pitsalarni qidirish" />
      <Link to="/">
      <div className="btn_wrap">
        <Link to="./cart">
        <button>
        <h2>Register</h2>
      </button>
        </Link>
        
      <Link to="./korzinka">
      <button >
        <h2>Savat</h2>
      </button>
      </Link>
      
      </div>
      
      </Link>
    </div>
  )
}
