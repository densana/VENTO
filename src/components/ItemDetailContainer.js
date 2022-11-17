import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {

  // HOOK
  const [data, setData] = useState({});

  const { detalleId } = useParams();

    // GET instanciar firestore, referencia producto, id producto 

  useEffect(() => {
    const db = getFirestore();

    const itemsRef = doc(db, "catalogo", detalleId);

    getDoc(itemsRef).then((producto) =>
      setData({ id: producto.id, ...producto.data() })
    );
  }, [detalleId]);

  return <ItemDetail data={data} />;
};

export default ItemDetailContainer;
