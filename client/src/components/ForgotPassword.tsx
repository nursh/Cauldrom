import React, { Component } from 'react';
import { withFormik, Form, Field, ErrorMessage, FormikProps } from 'formik';
import { compose, ChildProps } from 'react-apollo';
import * as yup from 'yup';
import { RouteComponentProps } from 'react-router-dom';
import { RESET_PASSWORD_MUTATION, Props, Mutation, MutationPayload } from '../graphql/mutations/resetPassword';


interface ResetProps extends RouteComponentProps<any>, ChildProps<Props & Mutation, MutationPayload> {

}

interface ResetFormProps {
  email: string
}


const ForgotPassword: React.FC<Component<ResetProps & FormikProps<ResetFormProps>>> = () => {
  return (
    <div className="form-body">
      <div className="reset-container">
        <h2 className="heading--form-side heading--form-side--small center--text">Forgot Password</h2>
        <Form>
          <div className="field field__signin">
            <Field type="email" name="email" id="email" placeholder="Email" className="field__input"/>
            <ErrorMessage component="p" name="email" className="field__error reset__error" />
          </div>

          <div className="reset__submit">
            <button type="submit" className="field__submit">Send Email</button>
          </div>
        </Form>
      </div>
    </div>
  );
}


export const ForgotPasswordMain = compose(
  RESET_PASSWORD_MUTATION,
  withFormik<ResetProps, ResetFormProps>({
    mapPropsToValues: () => ({
      email: ''
    }),
    validationSchema: yup.object().shape({
      email: yup.string().email('Must use email format').required('Email is required'),
    }),
    handleSubmit: (values, { resetForm, props }) => {
      console.log(values);
      resetForm();
    }
  })
)(ForgotPassword);
