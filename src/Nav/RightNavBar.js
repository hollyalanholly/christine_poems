import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './RightNavBar.css';
import styled, { css } from 'styled-components';

const Ul = styled.ul`
`;

const RightNavBar = () => {
    return (
        <div className="RightNav">

            <ul className = "rightul">
                <li>
                <NavLink className ="linkcol" to ="/">Home</NavLink> 
                </li>

                <li className="nav-item">
                <NavLink className ="linkcol" to ="/poems">The Poems</NavLink>
                </li>

                <li className="nav-item">
                <NavLink className ="linkcol" to ="/contact_me">Contact Me</NavLink>
                </li>
            </ul>
            
        </div>
    )
}

export default RightNavBar;