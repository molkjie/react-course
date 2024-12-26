import './OrderForm.css';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '../../components/Button/Button';
import FormGroup from './FormGroup';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const schema = z.object({
  firstName: z.string().nonempty('First Name is required'),
  phone: z
    .string()
    .nonempty('Phone number is required')
    .regex(/^\+?[0-9]{10,15}$/, 'Invalid phone number format'),
  address: z.string().nonempty('Address is required'),
  priority: z.boolean(),
});

const OrderForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: 'kate',
      phone: '',
      address: '',
      priority: false,
    },
  });

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch(
          'https://react-fast-pizza-api.onrender.com/api/pizzas',
        );
        const data = await response.json();
        setPizzas(data);
      } catch (fetchError) {
        console.error('Error fetching pizzas:', fetchError);
        setError('Failed to load pizzas.');
      }
    };

    fetchPizzas();
  }, []);

  const onSubmit = async data => {
    setLoading(true);
    setError('');

    const cart = pizzas.map(pizza => ({
      pizzaId: pizza.id,
      name: pizza.name,
      quantity: 1,
      unitPrice: pizza.unitPrice,
      totalPrice: pizza.unitPrice * 1,
    }));

    const order = {
      customer: data.firstName,
      phone: data.phone,
      address: data.address,
      priority: data.priority,
      position: '',
      cart,
    };

    try {
      const response = await fetch(
        'https://react-fast-pizza-api.onrender.com/api/order',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(order),
        },
      );

      const result = await response.json();

      if (result.status === 'success') {
        navigate(`/orders/${result.data.id}`, { state: result.data });
      } else {
        setError('Order failed. Please try again.');
      }
    } catch (postError) {
      console.error('Error creating order:', postError);
      setError('Failed to connect to the server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="container-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Ready to order? Let`s go!</h1>

          <FormGroup
            name="firstName"
            label="First Name"
            control={control}
            errors={errors}
            type="text"
            readOnly
          />

          <FormGroup
            name="phone"
            label="Phone number"
            control={control}
            errors={errors}
            type="tel"
            placeholder="Enter your phone number"
          />

          <FormGroup
            name="address"
            label="Address"
            control={control}
            errors={errors}
            type="text"
            placeholder="Enter your address"
          />

          <div className="checkbox-group">
            <div className="checkbox-wrapper">
              <Controller
                name="priority"
                control={control}
                render={({ field }) => (
                  <>
                    <input
                      type="checkbox"
                      id="priority"
                      checked={field.value}
                      onChange={e => field.onChange(e.target.checked)}
                    />
                    <label htmlFor="priority">
                      Want to give your order priority?
                    </label>
                  </>
                )}
              />
            </div>
          </div>

          {error && <p className="error">{error}</p>}

          <Button
            type="submit"
            className="order-btn"
            text={loading ? 'Placing Order...' : 'Order now'}
            disabled={loading}
          />
        </form>

        {pizzas.length > 0 && (
          <div className="pizzas-list">
            <h2>Your Selected Pizzas:</h2>
            <ul>
              {pizzas.map(pizza => (
                <li key={pizza.id}>
                  {pizza.name} - €{pizza.price}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderForm;
