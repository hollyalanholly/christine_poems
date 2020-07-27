import React, { Component, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
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
// import SideBar from "./Nav/SideBar";
import BackDrop from "./Nav/BackDrop";


class App extends Component {
  state = {rightNavBarOpen: false};

  rightBarTogglerClickHandler =() => {
  this.setState((prevState) => {
      return {rightNavBarOpen: !prevState.rightNavBarOpen};
  });
  };

  rightBarClickHandler = () => {
    this.setState((prevState) => {
      return {rightNavBarOpen: !prevState.rightNavBarOpen};
    });
  };

//this is some code so when you click OUT Of the right nav bar it should vanish
  backDropClickHandler = () => {
    this.setState({rightNavBarOpen: false});
  };
  
  render() {
    let backDrop;
    if (this.state.rightNavBarOpen) {
      backDrop = <BackDrop click={this.backDropClickHandler} />
    //we are doing this so we can resue the components else where//
    }

    return (
      <Router>
      <div 
        className="App"
        style={{height: '100%'}}>
         {/* <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} /> */}
          < NavBar rightBarClickHandler = {this.rightBarTogglerClickHandler} />
          <RightNavBar show= {this.state.rightNavBarOpen}/>
          {backDrop}
        
          <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/Poems" component={Poems} />
          <Route path="/contact_me" component={ContactMe} />
          </Switch>
      
    </div>
    </Router>
    )
  }
}

export default App;
