import React from 'react';
import { NavLink } from 'react-router-dom';

import cauldromIcon from '../img/icon.svg';

type FormSideProps = {
  text: string,
  path: string,
  message: string
};

export const FormSide: React.FC<FormSideProps> = ({ text, path, message }) => {
  return (
    <div className="form-side">
      <div className="form__icon">
        <img src={cauldromIcon} alt="App Icon" className="form__logo" />
        <h2 className="heading--form-side">Cauldrom</h2>
      </div>
      <p className="form-side__message">{message}</p>
      <NavLink to={`${path}`} className="form__redirect">{text}</NavLink>
    </div>
  );
}
