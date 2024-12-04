import Button from '../Button/Button';
import Input from '../Input/Input';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const Form = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleInputChange = event => {
    setName(event.target.value);
  };

  const handleSubmit = () => {
    console.log(name);

    if (name.trim()) {
      navigate('/menu');
    } else {
      alert('Please enter your name');
    }
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
