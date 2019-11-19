import React from 'react';
import '../App.css';
import AdministratorNav from './AdministratorNav';

function AdministratorEvent({match}) {
    return (
        <div>
            <AdministratorNav userID={match.params.userID}/>
            <h1>
                Event Page ... Modal??
            </h1>
        </div>
    );
}

export default AdministratorEvent;