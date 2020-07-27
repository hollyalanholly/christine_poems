import React, { Component } from 'react';

import {Link} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';
import Dimensions from 'react-dimensions'

import RightNavBar from './RightNavBar';
import Burger from './Burger';

import './NavBar.css';

const NavBar = (props) => {
    return (
        <nav className ="Nav">
            <div className="logo">
                NavBar
            </div>
            <div className="navlinks">
                <div><NavLink className ="linkcol" to ="/">Home</NavLink></div>
                <div><NavLink className ="linkcol" to ="/poems">The Poems</NavLink></div>
                <div><NavLink className ="linkcol" to ="/contact_me">Contact Me</NavLink></div>
            </div>
            <div className="Burger">
                <Burger click ={props.rightBarClickHandler}/>
            </div>  
        </nav>
    )
}

export default NavBar;