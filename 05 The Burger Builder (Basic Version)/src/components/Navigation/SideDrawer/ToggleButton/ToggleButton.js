import React from 'react';
import classes from './ToggleButton.css';

const toggleBtn = (props) => (
   <div onClick={props.clicked} className={classes.Container}>
       <div>
           <div className={classes.ToggleBtn}></div>
           <div className={classes.ToggleBtn}></div>
           <div className={classes.ToggleBtn}></div>
       </div>
   </div>
);

export default toggleBtn;