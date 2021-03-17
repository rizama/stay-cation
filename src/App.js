import React from 'react';
import 'assets/scss/styles.scss';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from 'pages/LandingPage';
import DetailPage from 'pages/DetailPage';
// import ExampleInputDate from 'pages/ExampleInputDate';
// import ExampleBreadcrumb from 'pages/ExampleBreadcrumb';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage}></Route>
        <Route path="/properties/:id" component={DetailPage}></Route>
      </Router>
    </div>
  );
}

export default App;
