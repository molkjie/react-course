import { useState, useEffect } from 'react';
import '../components/Menu/Menu.css';
import PizzaItem from '../components/Pizza/Pizza';

const Menu = () => {
  const [pizzas, setPizzas] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPizzas = async () => {
      try {
        const response = await fetch(
          'https://react-fast-pizza-api.onrender.com/api/menu',
        );

        if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const result = await response.json();
        setPizzas(result.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getPizzas();
  }, []);

  if (loading) return <p>Loading pizzas...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="menu-container">
      <h1>Pizza Menu</h1>
      {pizzas.length === 0 ? (
        <p>No pizzas available.</p>
      ) : (
        <ul>
          {pizzas.map(pizza => (
            <PizzaItem key={pizza.id} pizza={pizza} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Menu;
