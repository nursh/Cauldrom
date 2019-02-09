import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


import cauldromIcon from '../img/icon.svg';

export class Register extends Component {

  render() {
    return (
      <div className="form-body">
        <div className="form-container">
          <div className="form-side">
            <div className="form__icon">
              <img src={cauldromIcon} alt="App Icon" className="form__logo" />
              <h1 className="heading--form-side">Cauldrom</h1>
            </div>
            <NavLink to="/signin" className="form__redirect">Sign In</NavLink>
          </div>
        </div>
      </div>
    )
  }
}