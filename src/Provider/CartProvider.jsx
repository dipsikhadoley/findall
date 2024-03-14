import React, { useState, children } from "react";
import { CartContext } from "../Context";

export const CartProvider = ({children}) => {
  const saveddatastring = localStorage.getItem("my-cart") || "{}";
  const savedData = JSON.parse(saveddatastring);

  const [cart, setCart] = useState(savedData);
  function handleaddtocart(productId, count) {
    console.log(productId, count);
    let oldcount = cart[productId] || 0;

    const newcart = { ...cart, [productId]: oldcount + count };
    updateCart(newcart);
  }

  function updateCart(newcart) {
    setCart(newcart);
    const cartstring = JSON.stringify(newcart);
    localStorage.setItem("my-cart", cartstring);
  }

  const totalcount = Object.keys(cart).reduce(function (output, current) {
    return output + cart[current];
  }, 0);

  return (
    <div>
      <CartContext.Provider  value={{ cart, totalcount, updateCart, handleaddtocart }}      >
        {children}
      </CartContext.Provider>
    </div>
  );
};
