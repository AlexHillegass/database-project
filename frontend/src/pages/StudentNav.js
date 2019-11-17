import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

function StudentNav() {
    const navStyle = {
        color: 'white'
    };

    return (
        <nav>
            <h3>Stuff</h3>
            <ul className="nav-Links">
                <Link style={navStyle} to="/rsos">
                    <li>RSOs</li>
                </Link>
                <Link style={navStyle} to="/events">
                    <li>Events</li>
                </Link>
            </ul>
        </nav>
    );
}

export default StudentNav;
