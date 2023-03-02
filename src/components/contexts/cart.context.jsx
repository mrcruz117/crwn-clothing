import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeCartItem: () => {},
  removeAllItems: () => {},
  cartCount: 0,
  totalCost: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    const cartCount = cartItems.reduce((acc, cartItem) => {
      return acc + cartItem.quantity;
    }, 0);
    setCartCount(cartCount);
  }, [cartItems]);

  useEffect(() => {
    const total = cartItems.reduce((acc, cartItem) => {
      return acc + cartItem.quantity * cartItem.price;
    }, 0);
    // console.log("total", total);
    setTotalCost(total);
  }, [cartItems]);

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

  const removeCartItem = (cartItemToRemove) => {
    const existingItem = cartItems.find(
      (cartItem) => cartItem.id === cartItemToRemove.id
    );

    if (existingItem.quantity === 1) {
      setCartItems(
        cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id)
      );
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === cartItemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const removeAllItems = (cartItemToRemove) => {
    setCartItems(
      cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id)
    );
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeCartItem,
    removeAllItems,
    cartItems,
    cartCount,
    totalCost
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
