import './OrderForm.css';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '../../components/Button/Button';
import FormGroup from './FormGroup';
import { Link } from 'react-router';

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
          <Link to="/orderStatus">
            <Button
              type="submit"
              className="order-btn"
              text="Order now for €12.00"
            />
          </Link>
        </form>
      </div>
    </div>
  );
};

export default OrderForm;
