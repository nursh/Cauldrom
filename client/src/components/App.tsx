import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import { Register } from './Register';

export const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Register} />
        <Route path="/register" component={Register} />
      </div>
    </Router>
  );
}
