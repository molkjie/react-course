import { useState } from 'react';
import '../Pizza/Pizza.css';
import Button from '../Button/Button';
import Counter from '../Counter/Counter';

const PizzaItem = ({ pizza }) => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(0);
    }
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
            <Counter
              quantity={quantity}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
            />
          )}
        </div>
      )}
    </li>
  );
};

export default PizzaItem;
