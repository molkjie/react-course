import './OrderStatus.css';
import Badge from './BadgeItem';
import PizzaItem from './PizzaItem';
import PriceItem from './PriceItem';
import { useLocation } from 'react-router';

const OrderStatus = () => {
  const { state } = useLocation();

  if (!state) {
    return <p>Order not found. Please try again.</p>;
  }

  const {
    customer = 'Unknown',
    cart = [],
    orderPrice = 0,
    priority = false,
    priorityPrice = 0,
    estimatedDelivery = new Date().toISOString(),
    status = 'unknown',
  } = state;

  return (
    <div className="container">
      <div className="header">
        <h1 className="order-title">Order status: {status}</h1>
        <p className="customer-info">Customer: {customer}</p>
        <div className="badges">
          {priority && <Badge text="PRIORITY" className="badge-priority" />}
          <Badge text={status.toUpperCase()} className="badge-status" />
        </div>
      </div>

      <div className="time-banner">
        <div className="time-left">
          Estimated delivery: {new Date(estimatedDelivery).toLocaleTimeString()}
        </div>
      </div>

      <div className="order-details">
        {cart.map(item => (
          <PizzaItem
            key={item.pizzaId}
            name={`${item.quantity}x ${item.name}`}
            price={`€${item.totalPrice}`}
            ingredients={item.ingredients || 'Ingredients not specified'}
          />
        ))}
      </div>

      <div className="price-breakdown">
        <PriceItem label="Order price:" value={`€${orderPrice}`} />
        {priority && (
          <PriceItem label="Priority price:" value={`€${priorityPrice}`} />
        )}
        <PriceItem
          label="Total price:"
          value={`€${orderPrice + (priority ? priorityPrice : 0)}`}
        />
      </div>
    </div>
  );
};

export default OrderStatus;
