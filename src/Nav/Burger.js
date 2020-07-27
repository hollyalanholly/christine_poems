import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Burger.css';
import styled from 'styled-components';
import RightNavBar from './RightNavBar';
import SideBar from './SideBar';


const Burger = (props) => {

    return (
    <button
        className="toggle_button" 
        onClick={props.click} >  
            {/* this takes the false value of open and transforms it to TRUE when clicked */}
                <div className="burgerDiv"></div>
                <div className="burgerDiv"></div>
                <div className="burgerDiv"></div>  
    </button>  
    )
}

export default Burger;

