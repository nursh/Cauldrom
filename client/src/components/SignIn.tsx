import React, { Component } from 'react'
import { withFormik, FormikProps, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { NavLink, RouteComponentProps } from 'react-router-dom';
import { compose, ChildProps } from 'react-apollo';


import { FormSide } from './FormSide';
import { CONFIRM_USER_MUTATION, Props, Mutation, MutationPayload } from '../graphql/mutations/confirmUser';
import { SIGNIN_MUTATION, SigninProps, SignInMutation, SignInMutationPayload } from '../graphql/mutations/signin';

interface IParams {
  token: string
}

type MutationProps = 
  ChildProps<Props & Mutation, MutationPayload>
  & ChildProps<SigninProps & SignInMutation, SignInMutationPayload>;

interface SignInProps extends RouteComponentProps<IParams>, MutationProps {

}

type FormValues = {
  email: string,
  password: string
}

class SignIn extends Component<SignInProps & FormikProps<FormValues>> {

  componentDidMount() {
    const { token } = this.props.match.params;
    if (token) {
      this.props.confirmUser!({
        variables: {
          token
        }
      });
    }
  }

  render() {
    return (
      <div className="form-body">
        <div className="form-container">
          <FormSide text="Sign Up" path="/signup" message="Need an account?"/>
          <div className="form-main">
            <h2 className="heading--form-side heading--form-side--small">Sign in</h2>
            <Form>

              <div className="field field--signin">
                <Field type="email" name="email" id="email" placeholder="Email Address" className="field__input" />
                <ErrorMessage component="p" name="email" className="field__error" />
              </div> 


              <div className="field field--signin">
                <Field type="password" name="password" id="password" placeholder="Password" className="field__input" />
                <ErrorMessage component="p" name="password" className="field__error" />
              </div>

              <div className="field field--reset">
                <NavLink to="/forgotPassword" className="field__reset">Forgot Password?</NavLink>
              </div>


              <div className="field field--signin">
                <button type="submit" className="field__submit">Sign in</button>
              </div>
            </Form>
          </div>

        </div>
      </div>
    )
  }
}

export const SignInFormik = compose(
  CONFIRM_USER_MUTATION,
  SIGNIN_MUTATION,
  withFormik<SignInProps, FormValues>({
    mapPropsToValues: () => ({
      email: '',
      password: ''
    }),
    validationSchema: yup.object().shape({
      email: yup.string().email('Must use email format').required('Email is required'),
      password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required')
    }),
    handleSubmit: async ({ email, password }, { resetForm, props }) => {
      const data = await props.signin!({
        variables: {
          email,
          password
        }
      });
      const result: any = {...data};
      const { signin } = result.data;
      if (signin) {
        props.history.push('/header');
      }
    }
  })
)(SignIn);
