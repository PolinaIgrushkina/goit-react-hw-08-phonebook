import React from 'react';
import { NavLink } from 'react-router-dom';

export default function AppBar() {
  return (
    <div>
      <div>
        <NavLink to="/register">Sign Up</NavLink>
        <NavLink to="/login">Log in</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
      </div>

      <div>
        <p>Welcome!</p>
        <button type='button'>Log out</button>
      </div>
    </div>
  )
}
