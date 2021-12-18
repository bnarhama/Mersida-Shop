import "./App.css";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import { Routes, Route } from "react-router-dom";
import Products from "./Component/Products";
import Product from "./Component/Product";

import Register from "./Component/Register";
import Cart from "./Component/Cart";
import Login from "./Component/Login";
import TheFooter from "./Component/TheFooter";
import GOToTop from "./Component/GOToTop";

function App() {
  return (
    <div className="app">
      <Navbar />
      <GOToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <TheFooter />
    </div>
  );
}

export default App;
