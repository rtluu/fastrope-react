import React from 'react';
import { Route, IndexRoute } from 'react-router-dom';

// Import Containers
import Home from './containers/Home.jsx';
import Team from './containers/Team.jsx';
import Case from './containers/Case.jsx';

export default () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/team" component={Team} />
    <Route path="/case" component={Case} />
  </div>
);
