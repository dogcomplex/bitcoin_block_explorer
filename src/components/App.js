import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import logo from '../logo.svg';
import Header from './Header';
import Home from './Home';
import Block from './Block';
import './App.scss';

const App = () => (
  <div className="App">
    <Header/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/block/:hash" component={Block} />
    </Switch>
  </div>
);


export default connect()(App);