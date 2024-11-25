import Button from '../Button/Button';
import '../Counter/Counter.css';

const Counter = ({ quantity, onIncrement, onDecrement }) => {
  return (
    <div className="counter">
      <Button className="decrement" text="-" onClick={onDecrement} />
      <span>{quantity}</span>
      <Button className="increment" text="+" onClick={onIncrement} />
    </div>
  );
};

export default Counter;
