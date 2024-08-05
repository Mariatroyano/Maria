import React from "react";
import { useContext } from "react";
// import { Product } from "../product";


const Cart = () => {
  const { Cart, addToCart, removeFromCart, clearCart } =
    useContext(CartContext);
}
  return (
    <div>
      <h2>Cart</h2>
      {cart.map((Product, idx) => {
        return (
          <div style={{ border: "1px solid", background: "#909090" }} key={idx}>
            <h2>{Product.name}</h2>
            <p>{Product.description}</p>
            <p>{Product.price}</p>
            <button onClick={() => removeFromCart(Product)}>
              Eliminar del carrito
            </button>
          </div>
        );
      })}
    </div>
  );
;
export default Cart;
