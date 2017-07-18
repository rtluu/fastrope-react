import React from 'react';
import { Route, IndexRoute } from 'react-router-dom';

// Import Containers
import Home from './containers/Home.jsx';
import Team from './containers/Team.jsx';
import Contact from './containers/Contact.jsx';

//Case Studies
import Wodify from './containers/case/Wodify.jsx';
import GWMFA from './containers/case/GWMFA.jsx';
import Verite from './containers/case/Verite.jsx';
import NetworkForGood from './containers/case/NetworkForGood.jsx';
import Envision from './containers/case/Envision.jsx';

export default () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/team" component={Team} />
    <Route path="/contact" component={Contact} />

    <Route path="/wodify" component={Wodify} />
    <Route path="/gwmfa" component={GWMFA} />
    <Route path="/verite" component={Verite} />
    <Route path="/networkforgood" component={NetworkForGood} />
    <Route path="/envision" component={Envision} />
  </div>
);
