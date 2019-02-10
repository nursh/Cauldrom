import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import { SignUpFormik } from './SignUp';

export const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={SignUpFormik} />
        <Route path="/register" component={SignUpFormik} />
      </div>
    </Router>
  );
}
