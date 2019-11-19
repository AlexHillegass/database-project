import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

function StudentNav(props) {
    const navStyle = {
        color: 'white'
    };

    return (
        <nav>       
            <h3>{props.pageName}</h3>
            <ul className="nav-Links">
                <Link style={navStyle} to={`/students/${props.userID}/rsos`}>
                    <li>RSOs</li>
                </Link>
                <Link style={navStyle} to={`/students/${props.userID}/events`}>
                    <li>Events</li>
                </Link>
            </ul>
        </nav>
    );
}

export default StudentNav;
