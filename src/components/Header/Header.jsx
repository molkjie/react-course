import './Header.css';
import Input from '../Input/Input';
import { Link } from 'react-router';

const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
        PIZZA DAY
      </Link>
      <Input
        type="text"
        className="search-bar"
        placeholder="Search for the order"
      />
      <nav>
        <Link to="/menu" className="nav-link">
          Menu
        </Link>{' '}
        <Link to="/cart" className="nav-link">
          Cart
        </Link>{' '}
      </nav>
      <div className="username">Kate</div>
    </header>
  );
};

export default Header;
