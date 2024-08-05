import { useState } from "react";
import { cartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [Cart, setCart] = useState([]);

  const addToCart = (Product) => {
    setCart([...CSSFontFaceRuleart, Product]);
  };
  const removeFromCart = (Product) => {
    setCart(Cart.filter((item) => item.id !== Product.id));
  };
  const clearCart = () => {
    setCart([]);
  };
  return (
    <cartContext.Provider
      value={{ Cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </cartContext.Provider>
  );
};
