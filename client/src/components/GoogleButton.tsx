import React from 'react'
import { NavLink } from 'react-router-dom';


import googleIcon from '../img/google.svg';

type GoogleProps = {
  text: string,
  path: string
};

export const GoogleButton: React.FC<GoogleProps> = ({ text, path }) => {
  return (
    <div className="google">
      <NavLink to={`${path}`} className="google__button">
        <img src={googleIcon} alt="Google Icon" className="google__logo" />
        {text}
      </NavLink>
    </div>
  );
}
