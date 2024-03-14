import { Routes, Route } from "react-router-dom";
import { Footer } from "./Footer/Footer";

import Navbar from "./Navbar/Navbar";
import CartPage from "./Pages/CartPage";
import { ProductsPages } from "./Pages/ProductsPages";
import { CartProvider } from "./Provider/CartProvider";
import ProductstDetail from "./Pages/ProductstDetail";
import { useState } from "react";
import Login from './Pages/Registration/Login'
import SingUp from './Pages/Registration/SingUp'
import UserDashboard from "./Pages/User/UserDashboard";
import Admin from "./Pages/admin/Admin";


function App() {


  return (
    <>
      <CartProvider>
     
        <Navbar />
        <Routes>
          <Route index element={<ProductsPages />}></Route>
          <Route path="/products/:id" element={<ProductstDetail />}></Route>
          <Route path="/products/cart" element={<CartPage />}></Route>
          <Route path="/singup" element={<SingUp/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/user-dashboard" element={<UserDashboard/>}></Route>
          <Route path="/Admin" element={<Admin/>}></Route>
        </Routes>
        <Footer />
      </CartProvider>
    </>
  );
}

export default App;
