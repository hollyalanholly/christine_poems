import React, { Component } from 'react';
import {
  Link,
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import './App.css';

import HomePage from './Pages/HomePage';
import Poems from './Pages/Poems';
import ContactMe from './Pages/ContactMe';
import NavBar from './Nav/NavBar';
import RightNavBar from './Nav/RightNavBar';
import Burger from './Nav/Burger';

function App() {
    return (
      <Router>
        <div className="App">
        <div>< NavBar /></div>
        <div>< RightNavBar /></div>

          <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/Poems" component={Poems} />
          <Route path="/contact_me" component={ContactMe} />
          </Switch>
        </div>
      </Router>
    )
}

export default App;
