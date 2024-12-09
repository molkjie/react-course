import Button from '../Button/Button';
import Input from '../Input/Input';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router';
import { UserContext } from '/src/context/UserContext.jsx';

const Form = () => {
  const [name, setName] = useState('');
  const { setUserName } = useContext(UserContext);
  const navigate = useNavigate();

  const handleInputChange = event => {
    setName(event.target.value);
  };

  const handleSubmit = () => {
    if (name.trim()) {
      setUserName(name);
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
