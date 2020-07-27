import React, { Component } from 'react';

import {Link} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';
import styled, { css } from 'styled-components';

import RightNavBar from './RightNavBar';
import Burger from './Burger';

import './NavBar.css';

const NavBar = (props) => {
    return (
        <nav className ="Nav">
            <div className="logo">
                NavBar
            </div>
            {/* <div><RightNavBar/></div> */}
            <div><Burger click ={props.rightBarClickHandler}/></div>
        
        </nav>
    )
}

export default NavBar;