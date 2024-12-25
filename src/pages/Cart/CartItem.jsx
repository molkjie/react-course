import Counter from '../../components/Counter/Counter';
import Button from '../../components/Button/Button';

const CartItem = ({ item, onIncrement, onDecrement, onDelete }) => {
  const unitPrice = item.unitPrice || 0;
  const quantity = item.quantity || 0;

  return (
    <div className="cart-item">
      <span className="quantity-text">{quantity}×</span>
      <span>{item.name}</span>
      <span className="price">€{(unitPrice * quantity).toFixed(2)}</span>
      <div className="quantity-controls">
        <Counter
          quantity={quantity}
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
