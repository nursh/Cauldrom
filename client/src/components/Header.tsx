import React from 'react';
import { NavLink } from 'react-router-dom';


export const Header = () => {
  return (
    <div className="header">
      <div>
        <h3>Cauldrom</h3>
      </div>
      <nav className="header__nav">
        <ul className="header__nav__list">
          <li className="header__nav__item">Welcome, Username</li>
          <li className="header__nav__item">
            <NavLink to="/signin" className="header__nav__link">Logout</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}