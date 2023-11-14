import { useContext, useEffect } from "react";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import PaymentForm from "../../components/payment-form/payment-form.component";

import { useDispatch, useSelector } from "react-redux";

import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.reducer";

import "./checkout.styles.scss";

const Checkout = () => {
  const dispatch = useDispatch();
  // const { cartItems, setIsCartOpen, totalCost } = useContext(CartContext);
  const cartItems = useSelector(selectCartItems);
  const totalCost = useSelector(selectCartTotal);

  useEffect(() => {
    dispatch(setIsCartOpen(false));
  }, []);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <span className="total">{`Total: $${totalCost}`}</span>
      <PaymentForm />
    </div>
  );
};

export default Checkout;
