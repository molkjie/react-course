import './OrderStatus.css';
const PizzaItem = ({ name, price, ingredients }) => (
  <div className="pizza-item">
    <div className="pizza-header">
      <span className="pizza-name">{name}</span>
      <span className="pizza-price">{price}</span>
    </div>
    <div className="ingredients">{ingredients}</div>
  </div>
);

export default PizzaItem;
