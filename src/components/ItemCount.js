import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function ItemCount({ initial, stock, onAdd }) {
    
 // HOOK 
  const [count, setCount] = useState(initial);

  // funciones del boton

  const decrease = () => {
    setCount(count - 1);
  };

  const increase = () => {
    setCount(count + 1);
  };

  return (
    <div className="botones">
      <ButtonGroup aria-label="Basic example">
        <Button variant="secondary" disabled={count <= 1} onClick={decrease}>
          -
        </Button>
        <Button variant="secondary">{count}</Button>
        <Button
          variant="secondary"
          disabled={count >= stock}
          onClick={increase}
        >
          +
        </Button>
      </ButtonGroup>
      <Button
        variant="outline-light"
        disabled={stock <= 0}
        onClick={() => onAdd(count)}
      >
        Agregar al carrito
      </Button>
    </div>
  );
}

export default ItemCount;
