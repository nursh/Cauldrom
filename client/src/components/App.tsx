import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import { SignUpFormik } from './SignUp';
import { SignInFormik } from './SignIn';
import { ResetPasswordMain } from './ResetPassword';
import { ForgotPasswordMain } from './ForgotPassword';
import { Header } from './Header';

export const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={SignInFormik} />
        <Route path="/signup" component={SignUpFormik} />
        <Route exact path="/signin" component={SignInFormik} />
        <Route path="/signin/:token" component={SignInFormik} />
        <Route path="/resetPassword/:token" component={ResetPasswordMain} />
        <Route path="/forgotPassword" component={ForgotPasswordMain} />
        <Route path="/header" component={Header} />
      </div>
    </Router>
  );
}
