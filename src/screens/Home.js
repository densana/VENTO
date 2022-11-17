import ItemListContainer from "../components/ItemListContainer";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../styles/index.scss";
import "./Screens.scss";

function Home() {
  return (
    <>
      <Card className="bg-dark text-white">
        <Card.Img
          className="portada"
          src="https://res.cloudinary.com/dmsf9y1dk/image/upload/v1668442289/vento/portada_cxgg7c.jpg"
          alt="vento"
        />
        <Card.ImgOverlay className="portada-titulo">
          <p className="titulo-portada">SUMMER STARTS HERE</p>
          <Button variant="outline-light">Shop now !</Button>
        </Card.ImgOverlay>
      </Card>

      <div className="extra">
        <img
          className="foto-cuadrada"
          src="https://res.cloudinary.com/dmsf9y1dk/image/upload/v1668466109/vento/cuadrada_k2sqk4.jpg"
        />
        <div className="texto-cuadrado">
          <p className="titulo">Luxury Swimwear</p>
          <p>
            Diseñamos trajes de baño tejidos a mano con materiales y procesos
            sustentables, cuidando cada parte del proceso para hacer piezas
            únicas
          </p>
          <p>
            Nos inspira la naturaleza, los elementos, la magia. Sentimos,
            habitamos, vibramos en cada traje de baño
          </p>
          <p>Querés sentir la experiencia en tu piel?</p>
          <Button variant="outline-light">Quiero!</Button>
        </div>
      </div>

      <h4 className="titulo-productos">Shop Now!</h4>

      <ItemListContainer />
    </>
  );
}

export default Home;
