// import { useContext, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
// import { setIsCartOpen } from "../../store/cart/cart.action";

import {
  selectCartItems,
  // selectIsCartOpen,
} from "../../store/cart/cart.selector";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  
  // const { setIsCartOpen, cartItems } = useContext(CartContext);
  const cartItems = useSelector(selectCartItems);


  const navigate = useNavigate();

  // const wrapperRef = useRef(null);

  // const handleClickOutside = (event) => {
  //   if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
  //     dispatch(setIsCartOpen(false));
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => {
            return <CartItem key={cartItem.id} cartItem={cartItem} />;
          })
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
        {}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
