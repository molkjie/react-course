import Button from '../Button/Button';
import Input from '../Input/Input';

const Form = () => {
  return (
    <div>
      <Input type="text" placeholder="Your full name" />
      <Button className="btn" text="Start Order" />
    </div>
  );
};

export default Form;
