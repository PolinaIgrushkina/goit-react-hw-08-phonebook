import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/Auth/auth-operations';
import { selectorUsername } from 'redux/selectors';
import { Button, Container, Name } from './UserMenu.styled';

export default function UserMenu() {
  const name = useSelector(selectorUsername);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <Container>
      <Button type="button" onClick={handleClick}>
        LogOut
      </Button>
      <Name>Welcome, {name}!</Name>
    </Container>
  );
}
