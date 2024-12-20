import '../components/OrderForm/OrderForm.css';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';

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

  const onSubmit = data => {
    alert(`Order submitted!`);
    console.log(data);
  };

  return (
    <div className="container">
      <h1>Ready to order? Let`s go!</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <Controller
            name="firstName"
            control={control}
            render={({ field }) => (
              <Input type="text" {...field} readOnly className="input" />
            )}
          />
          {errors.firstName && (
            <span className="error">{errors.firstName.message}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone number</label>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <Input
                type="tel"
                id="phone"
                {...field}
                className="input"
                placeholder="Enter your phone number"
              />
            )}
          />
          {errors.phone && (
            <span className="error">{errors.phone.message}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <div className="input-wrapper">
            <Controller
              name="address"
              control={control}
              render={({ field }) => (
                <Input
                  type="text"
                  id="address"
                  {...field}
                  className="input"
                  placeholder="Enter your address"
                />
              )}
            />
            {errors.address && (
              <span className="error">{errors.address.message}</span>
            )}
          </div>
        </div>

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
