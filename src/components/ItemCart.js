import React from "react";
import { useCartContext } from "../Context/CartContext";
import Button from "react-bootstrap/Button";

const ItemCart = ({ product }) => {

// HOOK CONTEXT
  const { removeProduct } = useCartContext();

  return (
    <tr>
      <td>
        <img className="foto-cart" src={product.picture}></img>
      </td>
      <td>{product.quantity}</td>
      <td>{product.title}</td>
      <td>{product.price}</td>
      <td>{product.quantity * product.price}</td>
      <td>
        <Button
          variant="outline-dark"
          onClick={() => removeProduct(product.id)}
        >
          x
        </Button>
      </td>
    </tr>
  );
};

export default ItemCart;
