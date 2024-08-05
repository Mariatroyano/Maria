import React from "react";
import './ProductList.css'
import { Product } from "../../product";

export default function ProductList() {
  const products = Product.flat();
  return (
    <div className="products">
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <div>{product.title}</div>
            <div>{product.description}</div>
            <div>{product.price}</div>
            <button>Agregar al carrito</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
