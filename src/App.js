import React, { Component } from 'react';
import logo from './logo.svg';
import {
  HashRouter,
  Link,
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './App.css';

import HomePage from './Pages/HomePage';
import ContactMe from './Pages/ContactMe';

class App extends Component {
  render() {
    return (
      <HashRouter basename='/'>
        <div className="App">

          <ul>
            <li><Link to="/">HomePage</Link></li>
            <li><Link to="contact_me">ContactMe</Link></li>
          </ul>
          <hr />

          <Route path="/" component={HomePage} exact />
          <Route path="/contact_me" component={ContactMe} />
        </div>
      </HashRouter>
    );
  }
}

// const HomePage = () => <div><h2>HomePage</h2></div>
// const ContactMe = () => <div><h2>ContactMe</h2></div>

export default App;
