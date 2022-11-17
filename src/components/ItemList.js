import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemList = ({ data = [] }) => {
  return data.map((vento) => 

  <Link to={`/detalle/${vento.id}`} className="vento">
    
      <Card style={{ width: "18rem" }} className="bg-dark text-white">
        <Card.Img src={vento.picture} alt="" />
        <Card.ImgOverlay variant="bottom">
          <Card.Title>{vento.title}</Card.Title>
        </Card.ImgOverlay>
      </Card>
    </Link>
    
    );
};

export default ItemList;
