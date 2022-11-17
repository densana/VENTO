import React from "react";
import ItemCount from "./ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";
import Image from 'react-bootstrap/Image'

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const ItemDetail = ({ data }) => {
  const [goToCart, setGoToCart] = useState(false);

  const { addProduct } = useCartContext();

  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(data, quantity);
  };

  return (
    <div className="extra">
      <Image style={{ width: '22rem' }} src={data.picture}></Image>
      <div className="texto-cuadrado">
        <p className="titulo">{data.title}</p>
        <p>{data.description}</p>
        <p>${data.price}</p>
        <Form.Select aria-label="Default select example">
          <option>Colores</option>
          <option>{data.color}</option>
        </Form.Select>
        
        {goToCart ? (
    
          <Button as={Link} to="/cart" variant="light">
            Ver en Carrito
          </Button>
        ) : (
          <ItemCount initial={1} stock={5} onAdd={onAdd} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
