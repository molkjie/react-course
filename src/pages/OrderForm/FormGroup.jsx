import { Controller } from 'react-hook-form';
import Input from '../../components/Input/Input';

const FormGroup = ({
  name,
  label,
  control,
  errors,
  type = 'text',
  placeholder = '',
  readOnly = false,
  className = 'input',
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Input
            type={type}
            id={name}
            {...field}
            readOnly={readOnly}
            className={className}
            placeholder={placeholder}
          />
        )}
      />
      {errors[name] && <span className="error">{errors[name].message}</span>}
    </div>
  );
};

export default FormGroup;
