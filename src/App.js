import NavBar from "../src/components/NavBar";
import Home from "./screens/Home";
import Catalogo from "./screens/Catalogo";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./screens/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./Context/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categoria/:categoriaId" element={<Catalogo />} />
          <Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
