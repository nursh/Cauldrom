import React from 'react';
import { withFormik, Form, Field, ErrorMessage, FormikProps } from 'formik';
import { compose } from 'react-apollo';
import * as yup from 'yup';

interface ResetProps {

}

interface ResetFormProps {
  password: string
}

const ResetPassword: React.FC<ResetProps & FormikProps<ResetFormProps>> = () => {
  return (
    <div className="form-body">
      <div className="reset-container">
        <h2 className="heading--form-side heading--form-side--small center--text">Reset Password</h2>
        <Form>
          <div className="field field__signin">
            <Field type="password" name="password" id="password" placeholder="Password" className="field__input"/>
            <ErrorMessage component="p" name="password" className="field__error reset__error" />
          </div>

          <div className="reset__submit">
            <button type="submit" className="field__submit">Reset Password</button>
          </div>
        </Form>
      </div>
    </div>
  )
}


export const ResetPasswordMain = compose(

  withFormik<ResetProps, ResetFormProps>({
    mapPropsToValues: () => ({
      password: ''
    }),
    validationSchema: yup.object().shape({
      password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required')
    }),
    handleSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    }
  })
)(ResetPassword);
