import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/Auth/auth-operations';
import { Button, DivStyled, Form, Label } from './LoginView.styled';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    switch (event.target.name) {
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
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <DivStyled>
      <h3>If you have account, please, Log In.</h3>

      <Form onSubmit={handleSubmit} autoComplete="off">
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

        <Button type="submit">LogIn</Button>
      </Form>
    </DivStyled>
  );
}
