import '../components/Order/OrderForm.css';
import { useState } from 'react';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';

const OrderForm = () => {
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [priority, setPriority] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    alert('Order submitted!');
  };

  return (
    <div className="container">
      <h1>Ready to order? Let`s go!</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <Input type="text" value="kate" readOnly className="input" />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone number</label>
          <Input
            type="tel"
            id="phone"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            className="input"
            placeholder="Enter your phone number"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <div className="input-wrapper">
            <Input
              type="text"
              id="address"
              value={address}
              onChange={e => setAddress(e.target.value)}
              className="input"
              placeholder="Enter your address"
              required
            />
          </div>
        </div>

        <div className="checkbox-group">
          <div className="checkbox-wrapper">
            <input
              type="checkbox"
              id="priority"
              checked={priority}
              onChange={() => setPriority(!priority)}
            />
            <label htmlFor="priority">Want to give your order priority?</label>
          </div>
        </div>

        <Button
          type="submit"
          className="order-btn"
          text="Order now for €12.00"
        />
      </form>
    </div>
  );
};

export default OrderForm;
