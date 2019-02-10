import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  InjectedFormikProps,
  withFormik,
  Form,
  Field,
  ErrorMessage
} from 'formik';


import cauldromIcon from '../img/icon.svg';
import googleIcon from '../img/google.svg';


type FormValues = {
  name: string,
  email: string,
  password: string
};

type SignUpProps = {

}

class SignUp extends Component<InjectedFormikProps<SignUpProps, FormValues>> {

  render() {
    return (
      <div className="form-body">
        <div className="form-container form-container--register">
          <div className="form-main">
            <h2 className="heading--form-side heading--form-side--small">Register</h2>
            <Form>
              <div className="field">
                <Field name="name" id="name" placeholder="Username" className="field__input" />
                <ErrorMessage name="name" />
              </div>

              <div className="field">
                <Field type="password" name="password" id="password" placeholder="Password" className="field__input" />
                <ErrorMessage name="password" />
              </div>

              <div className="field">
                <Field type="email" name="email" id="email" placeholder="Email Address" className="field__input" />
                <ErrorMessage name="email" />
              </div> 

              <div className="field">
                <button type="submit" className="field__submit">Register</button>
              </div>
            </Form>
            <p className="form__or">OR</p>
            <div className="google">
              <NavLink to="/signup" className="google__button">
                <img src={googleIcon} alt="Google Icon" className="google__logo" />
                Sign up with Google
              </NavLink>
            </div>
          </div>
          <div className="form-side">
            <div className="form__icon">
              <img src={cauldromIcon} alt="App Icon" className="form__logo" />
              <h2 className="heading--form-side">Cauldrom</h2>
            </div>
            <NavLink to="/signin" className="form__redirect">Sign In</NavLink>
          </div>
        </div>
      </div>
    )
  }
}

export const SignUpFormik = withFormik<SignUpProps, FormValues>({
  mapPropsToValues: () => ({
    name: '',
    email: '',
    password: ''
  }),
  handleSubmit: (values, { resetForm }) => {
    console.log(values);
    resetForm();
  }
})(SignUp);