import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../redux/auth/auth-operations';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = evt => {
    const name = evt.currentTarget.name;
    const inputValue = evt.target.value;

    switch (name) {
      case 'name':
        setName(inputValue);
        break;
      case 'email':
        setEmail(inputValue);
        break;
      case 'password':
        setPassword(inputValue);
        break;

      default:
        break;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </>
  );
}
