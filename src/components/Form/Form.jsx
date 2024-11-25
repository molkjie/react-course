import Button from '../Button/Button';
import Input from '../Input/Input';
import { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');

  const handleInputChange = event => {
    setName(event.target.value);
  };

  const handleSubmit = () => {
    console.log(name);
  };

  return (
    <div>
      <Input
        type="text"
        placeholder="Your full name"
        value={name}
        onChange={handleInputChange}
      />
      <Button className="btn" text="Start Order" onClick={handleSubmit} />
    </div>
  );
};

export default Form;
