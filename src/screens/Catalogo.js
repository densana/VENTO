import React from "react";
import ItemListContainer from "../components/ItemListContainer";

import "./Screens.scss";

function Catalogo() {
  return (
    <>
      <div id="categorias">
        <p className="categorias-titulo">SHOP NOW !</p>
      </div>

      <ItemListContainer />
    </>
  );
}

export default Catalogo;
