import { MenuOpen } from '@material-ui/icons';
import React from 'react';

//React Router DOM Imports
import { NavLink } from "react-router-dom";

const MenuOptions = ({Icon, text, url}) =>{
    return(
        <NavLink to={url} exact>
            <Icon/><h3>{text}</h3>
        </NavLink>
    )
}

export default MenuOptions;