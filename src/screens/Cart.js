import "./Screens.scss";
import React from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";
import ItemCart from "../components/ItemCart";

import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  // datos del comprador hardcodeado y array nuevo de cart con datos que me interesan de la compra.

  const ordenCompra = {
    buyer: {
      name: "Denise",
      mail: "denisesananez@gmail.com",
      contacto: "1122334455",
      dirección: "calle FAlsa 123",
    },
    compra: cart.map((product) => ({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: product.quantity,
    })),
    total: totalPrice(),
  };

  // POST función boton para emitir orden de compra: instanciar firestore, referencia coleccion para guardar ordenes de compra, promesa para añadirlas

  const enviarOrden = () => {
    const db = getFirestore();
    const coleccionOrdenes = collection(db, "ordenesCompra");
    addDoc(coleccionOrdenes, ordenCompra).then(({ id }) => console.log(id));
  };

  if (totalPrice() === 0) {
    return (
      <>
        <Card className="bg-dark text-white">
          <Card.Img
            className="portada"
            src="https://images.pexels.com/photos/1242458/pexels-photo-1242458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="vento"
          />
          <Card.ImgOverlay className="cart">
            <p className="titulo-cart">SHOPING CART</p>
            <p> NO HAY ELEMENTOS EN EL CARRITO</p>
            <Button as={Link} to="/" variant="outline-light">
              Continuar comprando!
            </Button>
          </Card.ImgOverlay>
        </Card>
      </>
    );
  }
  return (
    <div>
      <Card className="bg-dark text-white">
        <Card.Img
          className="portada"
          src="https://images.pexels.com/photos/1242458/pexels-photo-1242458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="vento"
        />
        <Card.ImgOverlay className="cart">
          <p className="titulo-cart">SHOPING CART</p>

          <div className="carrito-compra">
            <Table className="tabla-cart" striped bordered hover>
              <thead>
                <tr>
                  <th>Swimwear</th>
                  <th>Cantidad</th>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Subtotal</th>
                  <th>Eliminar</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((product) => (
                  <ItemCart key={product.id} product={product} />
                ))}
              </tbody>
            </Table>

            <p className="total">Total : ${totalPrice()}</p>

            <Button as={Link} to="/" variant="outline-dark">
              Continuar comprando!
            </Button>
            <br></br>
            <br></br>
            <br></br>

            <Form>
              <p className="total">Datos del comprador</p>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    name="nombre"
                    type="email"
                    placeholder="Email"
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Name</Form.Label>
                  <Form.Control name="mail" type="text" placeholder="Nombre" />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridAddress1">
                  <Form.Label>Dirección</Form.Label>
                  <Form.Control name="direccion" placeholder="Dirección" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Contacto</Form.Label>
                  <Form.Control
                    name="contacto"
                    type="text"
                    placeholder="Nro Contacto"
                  />
                </Form.Group>
              </Row>
            </Form>

            <Button onClick={enviarOrden} variant="dark">
              Finalizar compra
            </Button>
          </div>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default Cart;
