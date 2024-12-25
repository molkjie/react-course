import '../Pizza/Pizza.css';
import Button from '../Button/Button';
import Counter from '../Counter/Counter';
import { useCart } from '../../context/CartContext';

const PizzaItem = ({ pizza }) => {
  const { cart, dispatch } = useCart();

  const cartItem = cart.find(item => item.id === pizza.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const handleIncrement = () => {
    dispatch({ type: 'ADD_TO_CART', payload: pizza });
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      dispatch({ type: 'DECREMENT_QUANTITY', payload: pizza.id });
    } else {
      dispatch({ type: 'REMOVE_FROM_CART', payload: pizza.id });
    }
  };

  const handleRemove = () => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: pizza.id });
  };

  return (
    <li key={pizza.id} className="pizza-item">
      <img src={pizza.imageUrl} alt={pizza.name} className="pizza-image" />
      <div className="pizza-info">
        <h2>{pizza.name}</h2>
        <p className="ingredients">{pizza.ingredients.join(', ')}</p>
        {pizza.soldOut ? (
          <p className="sold-out">Sold Out</p>
        ) : (
          <p className="price">${pizza.unitPrice}</p>
        )}
      </div>
      {!pizza.soldOut && (
        <div className="cart-controls">
          {quantity === 0 ? (
            <Button
              className="add-to-cart"
              text="Add to Cart"
              onClick={handleIncrement}
            />
          ) : (
            <>
              <Counter
                quantity={quantity}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
              />
              <Button
                className="remove-from-cart"
                text="Delete"
                onClick={handleRemove}
              />
            </>
          )}
        </div>
      )}
    </li>
  );
};

export default PizzaItem;
