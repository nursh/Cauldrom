import React, { Component } from 'react'
import { Formik, FormikProps, Form, Field, ErrorMessage } from 'formik';

import { MainHeader } from './Header';

interface FormValues {
  name: string,
  description: string
}

export class CreateProject extends Component<{}> {
  render() {
    return (
      <div>
        <MainHeader />
        <h2>Create Project</h2>
        <Formik
          initialValues={{
            name: '',
            description: ''
          }}
          validationSchema={{

          }}
          onSubmit={(values: FormValues) => {
            console.log(values);
          }}
          render={(formikBag: FormikProps<FormValues>) => (
            <Form>
              <Field 
                name="name"

              />
              <button type="submit">
                Submit
              </button>
            </Form>
          )}
        />
      </div>
    )
  }
}
