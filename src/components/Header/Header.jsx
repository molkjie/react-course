import "./Header.css"; 
import Input from "../Input/Input"

const Header = () => {
  return (
    <header>
      <div className="logo">PIZZA DAY</div>
      <Input type="text" className="search-bar" placeholder="Search for the order" />
      <div className="username">VLAD</div>
    </header>
  );
};

export default Header;