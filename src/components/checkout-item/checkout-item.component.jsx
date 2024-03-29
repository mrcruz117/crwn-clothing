import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectCartItems } from "../../store/cart/cart.selector";
import {
  removeAllItems,
  addItemToCart,
  removeItemFromCart,
} from "../../store/cart/cart.reducer";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { name, price, imageUrl, quantity } = cartItem;
  // const cartItems = useSelector(selectCartItems);

  const clearItemHandler = () => {
    dispatch(removeAllItems(cartItem));
  };

  const addItemHandler = () => {
    dispatch(addItemToCart(cartItem));
  };

  const removeItemHandler = () => {
    dispatch(removeItemFromCart(cartItem));
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <button className="arrow" onClick={removeItemHandler}>
          &#10094;
        </button>
        <span className="value">{quantity}</span>
        <button className="arrow" onClick={addItemHandler}>
          &#10095;
        </button>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
