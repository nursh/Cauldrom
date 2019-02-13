import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import { SignUpFormik } from './SignUp';
import { SignInFormik } from './SignIn';
import { ResetPassword } from './ResetPassword';

export const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={SignInFormik} />
        <Route path="/signup" component={SignUpFormik} />
        <Route path="/signin" component={SignInFormik} />
        <Route path="/resetPassword" component={ResetPassword} />
      </div>
    </Router>
  );
}
