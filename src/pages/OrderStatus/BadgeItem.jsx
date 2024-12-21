import './OrderStatus.css';
const Badge = ({ text, className }) => (
  <span className={`badge ${className}`}>{text}</span>
);
export default Badge;
