import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/Auth/auth-operations';
import { Button, DivStyled, Form, Label } from './RegisterView.styled';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    switch (event.target.name) {
      case 'name':
        return setName(event.target.value);
      case 'email':
        return setEmail(event.target.value);
      case 'password':
        return setPassword(event.target.value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <DivStyled>
      <h3>Please, fill in all fields for registration.</h3>

      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Name"
          />
        </Label>

        <Label>
          E-mail
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="example@mail.com"
          />
        </Label>

        <Label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="7 and more symbols"
          />
        </Label>

        <Button type="submit">SignUp</Button>
      </Form>
    </DivStyled>
  );
}
