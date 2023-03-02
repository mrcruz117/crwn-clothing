import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { name, price, imageUrl, quantity } = cartItem;

  const { removeAllItems, addItemToCart, removeCartItem } =
    useContext(CartContext);

  const clearItemHandler = () => {
    removeAllItems(cartItem);
  };

  const addItemHandler = () => {
    addItemToCart(cartItem);
  };

  const removeItemHandler = () => {
    removeCartItem(cartItem);
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
