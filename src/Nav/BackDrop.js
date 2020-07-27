import React from "react";

import './BackDrop.css';



const backdrop = props => (
    <div className="backDrop" onClick={props.click}/>
);

export default backdrop;
  