import React, {Component} from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './App.css';

import HomePage from './Pages/HomePage';
import ContactMe from './Pages/ContactMe';

class App extends Component {
  render () {
    return (
      <Router>
          <div className ="App">
            <Route path="/" component={HomePage} exact/>
            <Route path="/contact_me" component={ContactMe} />
          </div>

      </Router>
    );
  }
}

export default App;
