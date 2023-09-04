import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Cart from "./pages/cart";
import Login from "./pages/Login"
import ProtectedRoute from "./pages/ProtectedRoute"
import Korzinka from "./components/korzinka"



const app = () => {

  return (
    <>
      <div className="container">
        <header>
          <nav>
            <Navbar />
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/" element={<Login/>}/>
            <Route path="/ProtectedRoute" element={<ProtectedRoute/>}/>
            <Route path="/korzinka" element={<Korzinka/>}/>
          </Routes>
        </main>
      </div>
    </>
  );
};

export default app;
