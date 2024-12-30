import { Suspense, lazy } from 'react';
import Button from '../../components/Button/Button';
import './Cart.css';
import { useCart } from '../../context/CartContext';
import { Link, useNavigate } from 'react-router';

const CartItem = lazy(() => import('./CartItem'));

const Cart = () => {
  const navigate = useNavigate();
  const { cart, dispatch } = useCart();

  const handleOrderAndNavigate = () => {
    handleOrder();
    navigate('/orderForm');
  };

  const handleIncrement = id => {
    dispatch({ type: 'INCREMENT_QUANTITY', payload: id });
  };

  const handleDecrement = id => {
    dispatch({ type: 'DECREMENT_QUANTITY', payload: id });
  };

  const handleDelete = id => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const handleClearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const handleOrder = () => {
    console.log('Ordering pizzas...', cart);
  };

  return (
    <div className="cart-container">
      <Link to="/menu" className="back-link">
        ← Back to menu
      </Link>
      <h1 className="cart-title">Your cart</h1>

      <div className="cart-items">
        <Suspense fallback={<p>Loading items...</p>}>
          {cart.map(item => (
            <CartItem
              key={item.id}
              item={item}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
              onDelete={handleDelete}
            />
          ))}
        </Suspense>
      </div>

      <div className="cart-actions">
        <Link to="/order">
          <Button
            className="order-btn"
            text="Order pizzas"
            onClick={handleOrderAndNavigate}
          />
        </Link>
        <Button
          className="clear-btn"
          text="Clear cart"
          onClick={handleClearCart}
        />
      </div>
    </div>
  );
};

export default Cart;
