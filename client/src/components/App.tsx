import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import { SignUpFormik } from './SignUp';
import { SignInFormik } from './SignIn';

export const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={SignInFormik} />
        <Route path="/signup" component={SignUpFormik} />
        <Route path="/signin" component={SignInFormik} />
      </div>
    </Router>
  );
}
