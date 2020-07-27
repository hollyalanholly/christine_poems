import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './RightNavBar.css';
import styled, { css } from 'styled-components';

//aim is to click on burger to open righnav and click on backdrop to close it

const RightNavBar = ( props ) => {

    let drawerClasses = 'RightNav';
    if (props.show) {
        drawerClasses = 'RightNav open'; 
        //this has TWO classes so can use the open class to change position of right nav bar when open
    }

    return (
        <nav className={drawerClasses}>
            <button className = "rightul" onClick={props.click}>
                <li className= "nav-item">
                <NavLink className ="linkcol" to ="/">Home</NavLink> 
                </li>
                <li className="nav-item">
                <NavLink className ="linkcol" to ="/poems">The Poems</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className ="linkcol" to ="/contact_me">Contact Me</NavLink>
                </li>
            </button>
            
        </nav>
    )
}

export default RightNavBar;