import './Menu.css';
import PizzaItem from '../../components/Pizza/Pizza';
import { useCart } from '../../context/CartContext';
import useFetch from '../../hooks/useFetch';

const Menu = () => {
  const {
    data: pizzas,
    error,
    isLoading,
  } = useFetch('https://react-fast-pizza-api.onrender.com/api/menu');
  const { dispatch } = useCart();

  const handleAddToCart = pizza => {
    dispatch({ type: 'ADD_TO_CART', payload: pizza });
  };

  if (isLoading) return <p>Loading pizzas...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="menu-container">
      <h1>Pizza Menu</h1>
      {pizzas && pizzas.length === 0 ? (
        <p>No pizzas available.</p>
      ) : (
        <ul>
          {pizzas.map(pizza => (
            <PizzaItem
              key={pizza.id}
              pizza={pizza}
              onAddToCart={() => handleAddToCart(pizza)}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Menu;
