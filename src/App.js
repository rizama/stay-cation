import React from 'react';
import 'assets/scss/styles.scss';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import PageLanding from 'pages/PageLanding';
import DetailPage from 'pages/DetailPage';
import Checkout from 'pages/Checkout';
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={PageLanding}></Route>
        <Route path="/properties/:id" component={DetailPage}></Route>
        <Route path="/checkout" component={Checkout}></Route>
      </Router>

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
