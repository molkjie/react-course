import './OrderStatus.css';
const PriceItem = ({ label, value }) => (
  <div className="price-item">
    <span className="price-label">{label}</span>
    <span className="price-value">{value}</span>
  </div>
);
export default PriceItem;
