import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectorIsLoggedIn } from 'redux/selectors';
import { DivStyled } from './AppBar.styled';

export default function AppBar() {
  const isLoggedIn = useSelector(selectorIsLoggedIn);

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <UserMenu />
          <NavLink to="/contacts">Contacts</NavLink>
        </div>
      ) : (
        <DivStyled>
          <NavLink to="/register">Sign Up</NavLink>
          <NavLink to="/login">Log in</NavLink>
        </DivStyled>
      )}
    </div>
  );
}
