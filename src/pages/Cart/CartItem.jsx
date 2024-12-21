import Counter from '../../components/Counter/Counter';
import Button from '../../components/Button/Button';

const CartItem = ({ item, onIncrement, onDecrement, onDelete }) => {
  return (
    <div className="cart-item">
      <span className="quantity-text">{item.quantity}×</span>
      <span>{item.name}</span>
      <span className="price">€{(item.price * item.quantity).toFixed(2)}</span>
      <div className="quantity-controls">
        <Counter
          quantity={item.quantity}
          onIncrement={() => onIncrement(item.id)}
          onDecrement={() => onDecrement(item.id)}
        />
        <Button
          className="delete-btn"
          text="DELETE"
          onClick={() => onDelete(item.id)}
        />
      </div>
    </div>
  );
};

export default CartItem;
