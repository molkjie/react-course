import CartItem from '../components/Cart/CartItem';
import Button from '../components/Button/Button';
import '../components/Cart/Cart.css';
import { Link } from 'react-router';
const Cart = () => {
  const cartItems = [
    { id: 1, name: 'Margherita', price: 12.0, quantity: 1 },
    { id: 2, name: 'Romana', price: 15.0, quantity: 2 },
    { id: 3, name: 'Prosciutto e Rucola', price: 16.0, quantity: 1 },
  ];

  const handleIncrement = id => {
    console.log(`Increment quantity: ${id}`);
  };

  const handleDecrement = id => {
    console.log(`Decrement quantity: ${id}`);
  };

  const handleDelete = id => {
    console.log(`Delete item: ${id}`);
  };

  const handleOrder = () => {
    console.log('Ordering pizzas...');
  };

  const handleClearCart = () => {
    console.log('Clearing cart...');
  };

  return (
    <div className="cart-container">
      <Link to="/menu" className="back-link">
        ← Back to menu
      </Link>
      <h1 className="cart-title">Your cart, Vlad</h1>

      <div className="cart-items">
        {cartItems.map(item => (
          <CartItem
            key={item.id}
            item={item}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            onDelete={handleDelete}
          />
        ))}
      </div>

      <div className="cart-actions">
        <Button
          className="order-btn"
          text="Order pizzas"
          onClick={handleOrder}
        />
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
