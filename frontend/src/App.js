import React from 'react';
import './App.css';
import Administrator from './pages/Administrator';
import Events from './pages/Events';
import Event from './pages/Event';
import Rsos from './pages/Rsos';
import Rso from './pages/Rso';
import Landing from './pages/Landing';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Landing}/>
          <Route path="/administrators/:aid" component={Administrator}/>
          <Route path="/students/:sid/events" exact component={Events}/>
          <Route path="/students/:sid/rsos" exact component={Rsos}/>
          <Route path="/students/:sid/events/:eid" component={Event}/>
          <Route path="/students/:sid/rsos/:rid" component={Rso}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;