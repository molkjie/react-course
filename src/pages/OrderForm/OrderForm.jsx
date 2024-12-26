import './OrderForm.css';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '../../components/Button/Button';
import FormGroup from './FormGroup';
import { useNavigate } from 'react-router';
import useFetch from '../../hooks/useFetch';

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

  // Використовуємо кастомний хук useFetch
  const {
    data: pizzas,
    error: fetchError,
    isLoading: loadingPizzas,
  } = useFetch('https://react-fast-pizza-api.onrender.com/api/pizzas');

  const onSubmit = async data => {
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
        throw new Error('Order failed. Please try again.');
      }
    } catch (error) {
      console.error('Error creating order:', error);
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

          {fetchError && (
            <p className="error">Error loading pizzas: {fetchError}</p>
          )}

          <Button
            type="submit"
            className="order-btn"
            text={loadingPizzas ? 'Loading...' : 'Order now'}
            disabled={loadingPizzas}
          />
        </form>

        {pizzas && pizzas.length > 0 && (
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
