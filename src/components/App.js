import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import NotFound from './NotFound';
import Block from './Block';
import './App.scss';

const App = () => (
  <div className="App">
    <Header/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/blocks/:hash" component={({ match }) => <Block hash={match.params.hash} />} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default App;