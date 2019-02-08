import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import { Register } from './Register';

export const App: React.FC = () => {
  return (
    <Router>
      <Route path="/" component={Register} />
    </Router>
  );
}
