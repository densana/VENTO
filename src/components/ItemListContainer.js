import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import "../styles/index.scss";

function ItemListContainer() {

  // HOOK 
  const [data, setData] = useState([]);

  const { categoriaId } = useParams();

  // GET instanciar firestore, referencia coleccion productos, filtro id producto

  useEffect(() => {
    const db = getFirestore();

    const itemsCollectionRef = collection(db, "catalogo");

// si coincide con la categoria, me filtra los items (esto se ve en las categorias del menu), 
// sino me devuelve todos los productos que es lo que se muestra en el home)

    if (categoriaId) {
      const itemsFilter = query(
        itemsCollectionRef,
        where("category", "==", categoriaId)
      );
      getDocs(itemsFilter).then((res) =>
        setData(
          res.docs.map((producto) => ({ id: producto.id, ...producto.data() }))
        )
      );
    } else {
      getDocs(itemsCollectionRef).then((res) =>
        setData(
          res.docs.map((producto) => ({ id: producto.id, ...producto.data() }))
        )
      );
    } 
  }, [categoriaId]);

  return (
    <div className="cards-container">
      <ItemList data={data} />
    </div>
  );
}

export default ItemListContainer;
