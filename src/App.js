import React from 'react';
import 'assets/scss/styles.scss';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from 'pages/LandingPage';
import ExampleInputDate from 'pages/ExampleInputDate';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={ExampleInputDate}></Route>
      </Router>
    </div>
  );
}

export default App;
