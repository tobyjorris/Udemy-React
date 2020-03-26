import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import ToggleBtn from '../SideDrawer/ToggleButton/ToggleButton';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <ToggleBtn clicked={props.toggle}/>
        <div className={classes.Logo}>
            <Logo/>
        </div>
        <nav className={classes.DesktopOnly}>
            <NavItems/>
        </nav>
    </header>
);

export default toolbar;