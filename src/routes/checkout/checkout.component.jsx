import { useContext } from "react";
import { CartContext } from "../../components/contexts/cart.context";

import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, addItemToCart } = useContext(CartContext);

  return (
    <div>
      <h1>Checkout</h1>
      <div>
        {cartItems.map((cartItem) => {
          const { id, quantity, name } = cartItem;
          return (
            <div key={id}>
              <h2>{name}</h2>
              <span>{quantity}</span>
              <br />
              <span>decrease</span>
              <br />
              <span onClick={() => addItemToCart(cartItem)}>increase</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
