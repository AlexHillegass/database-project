import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

function AdministratorNav(props) {
    const navStyle = {
        color: 'white'
    };

    return (
        <nav>       
                <Link style={navStyle} to={'/'}>
                    Logout 
                </Link>
        </nav>
    );
}

export default AdministratorNav;
