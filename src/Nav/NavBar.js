import React, { Component } from 'react';

import {Link} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';
import styled, { css } from 'styled-components';

import './NavBar.css';

const Nav = styled.nav`
    
`;


const NavBar = () => {
    return (
        <Nav className ="Nav">
            <div className="logo">
                NavBar
            </div>
            {/* < RightNavBar /> */}
        </Nav>
    )
}

export default NavBar;