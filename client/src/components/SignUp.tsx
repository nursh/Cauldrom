import React, { Component } from 'react';
import { 
  InjectedFormikProps,
  withFormik,
  Form,
  Field,
  ErrorMessage
} from 'formik';
import * as Yup from 'yup';


import { FormSide } from './FormSide';
import { ChildProps, compose } from 'react-apollo';
import { SignupMutation, SignupProps, SignupMutationPayload, SIGNUP_MUTATION } from '../graphql/mutations/signup';

type FormValues = {
  name: string,
  email: string,
  password: string
};

type SignUpProps = ChildProps<SignupProps & SignupMutation, SignupMutationPayload>

class SignUp extends Component<InjectedFormikProps<SignUpProps, FormValues>> {

  render() {
    return (
      <div className="form-body">
        <div className="form-container form-container--signup">
          <div className="form-main">
            <h2 className="heading--form-side heading--form-side--small">Sign Up</h2>
            <Form>
              <div className="field">
                <Field name="name" id="name" placeholder="Username" className="field__input" />
                <ErrorMessage component="p" name="name" className="field__error" />
              </div>

              <div className="field">
                <Field type="password" name="password" id="password" placeholder="Password" className="field__input" />
                <ErrorMessage component="p" name="password" className="field__error" />
              </div>

              <div className="field">
                <Field type="email" name="email" id="email" placeholder="Email Address" className="field__input" />
                <ErrorMessage component="p" name="email" className="field__error" />
              </div> 

              <div className="field">
                <button type="submit" className="field__submit">Sign up</button>
              </div>
            </Form>
          </div>
          <FormSide text="Sign In" path="/signin" message="Already have an account?"/>
        </div>
      </div>
    )
  }
}

export const SignUpFormik = compose(
  SIGNUP_MUTATION,
  withFormik<SignUpProps, FormValues>({
    mapPropsToValues: () => ({
      name: '',
      email: '',
      password: ''
    }),
    validationSchema: Yup.object().shape({
      name: Yup.string().required('Username is required'),
      email: Yup.string().email('Must use email format').required('Email is required'),
      password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required')
    }),
    handleSubmit: async ({ name, email, password }, { resetForm, props }) => {
      await props.signup({
        variables: {
          username: name,
          email,
          password
        }
      });
      resetForm();
    }
  })
)(SignUp);