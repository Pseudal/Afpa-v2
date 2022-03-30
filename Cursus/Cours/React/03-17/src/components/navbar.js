import React from 'react';
import {NavLink, Link, Outlet} from 'react-router-dom'

const Navbar = () => {

    let activStyle = {textDecoration: "underline", backgroundColor: "red"}
    let activclassName = 'underline'   
    return (

        <> 
            <NavLink style={({isActive}) => isActive ? activStyle : undefined} to="/">Home</NavLink>
            <NavLink className={({isActive}) => isActive ? activclassName : undefined} to="/C2">comp2</NavLink>
            <Outlet />
            
        </>
    );
};

export default Navbar;