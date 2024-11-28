import Button from '../Button/Button';
import Counter from '../Counter/Counter';
import '../Cart/Cart.css';
const cartItems = [
  {
    id: 1,
    name: 'Margherita',
    price: 12.0,
    quantity: 1,
  },
  {
    id: 2,
    name: 'Romana',
    price: 15.0,
    quantity: 2,
  },
  {
    id: 3,
    name: 'Prosciutto e Rucola',
    price: 16.0,
    quantity: 1,
  },
];
const Cart = () => {
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
      <a href="#" className="back-link">
        ← Back to menu
      </a>
      <h1 className="cart-title">Your cart, Vlad</h1>

      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <span className="quantity-text">{item.quantity}×</span>
            <span>{item.name}</span>
            <span className="price">
              €{(item.price * item.quantity).toFixed(2)}
            </span>
            <div className="quantity-controls">
              <Counter
                quantity={item.quantity}
                onIncrement={() => handleIncrement(item.id)}
                onDecrement={() => handleDecrement(item.id)}
              />
              <Button
                className="delete-btn"
                text="DELETE"
                onClick={() => handleDelete(item.id)}
              />
            </div>
          </div>
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
