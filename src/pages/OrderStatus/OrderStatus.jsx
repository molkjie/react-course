import './OrderStatus.css';
import Badge from './BadgeItem';
import PizzaItem from './PizzaItem';
import PriceItem from './PriceItem';
const OrderStatus = () => {
  return (
    <div className="container">
      <div className="header">
        <h1 className="order-title">Order #5T460L status: preparing</h1>
        <div className="badges">
          <Badge text="PRIORITY" className="badge-priority" />
          <Badge text="PREPARING ORDER" className="badge-preparing" />
        </div>
      </div>

      <div className="time-banner">
        <div className="time-left">Only 49 minutes left 😃</div>
        <div className="estimated-time">
          (Estimated delivery: Dec 12, 01:37 PM)
        </div>
      </div>

      <div className="order-details">
        <PizzaItem
          name="1x Margherita"
          price="€12.00"
          ingredients="Tomato, Mozzarella, Basil"
        />
      </div>

      <div className="price-breakdown">
        <PriceItem label="Price pizza:" value="€12.00" />
        <PriceItem label="Price priority:" value="€2.00" />
        <PriceItem label="To pay on delivery:" value="€14.00" />
      </div>
    </div>
  );
};

export default OrderStatus;
