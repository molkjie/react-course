import '../Pizza/Pizza.css';
import Button from '../Button/Button';

const PizzaItem = ({ pizza }) => {
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
      {!pizza.soldOut && <Button className="add-to-cart" text="Add to Cart" />}
    </li>
  );
};

export default PizzaItem;
