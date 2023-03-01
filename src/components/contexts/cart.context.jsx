import { createContext, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    const existingItem = cartItems.find(
      (cartItem) => cartItem.id === productToAdd.id
    );

    if (existingItem) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === productToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...productToAdd, quantity: 1 }]);
    }
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
