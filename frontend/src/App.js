import React from 'react';
import './App.css';
import Administrator from './pages/Administrator';
import Events from './pages/Events';
import Event from './pages/Event';
import Rsos from './pages/Rsos';
import Rso from './pages/Rso';
import Landing from './pages/Landing';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AdministratorEvent from './pages/AdministratorEvent';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Landing}/>
          <Route path="/administrators/:userID" exact component={Administrator}/>
          <Route path="/administrators/:userID/events/:eventID" exact component={AdministratorEvent}/>
          <Route path="/students/:userID/events" exact component={Events}/>
          <Route path="/students/:userID/rsos" exact component={Rsos}/>
          <Route path="/students/:userID/events/:eventID" component={Event}/>
          <Route path="/students/:userID/rsos/:rsoID" component={Rso}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;