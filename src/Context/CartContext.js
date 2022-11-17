import { createContext } from "react";
import { useState, useContext } from "react";

// CONTEXTO DEL CARRITO

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

// PROVIDER CON FUNCIONALIDAD DEL CARRITO

const CartProvider = ({ children }) => {

    // HOOK ESTADO DEL CARRITO
  const [cart, setCart] = useState([]);
  
  const addProduct = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart(
        cart.map((producto) => {
          return producto.id === item.id
            ? { ...producto, quantity: producto.quantity + quantity }
            : producto;
        })
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const totalPrice = () => {
    return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
  };

  const clearCart = () => setCart([]);

  const isInCart = (id) =>
    cart.find((producto) => producto.id === id) ? true : false;

  const removeProduct = (id) =>
    setCart(cart.filter((producto) => producto.id !== id));
  return (
    <CartContext.Provider
      value={{
        clearCart,
        isInCart,
        removeProduct,
        addProduct,
        totalPrice,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
