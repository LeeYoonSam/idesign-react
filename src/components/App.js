import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from '../logo.svg';
import './App.css';

import NotExist from './NotExists'
import Home from '../routes/Home';
import Posts from '../routes/Posts';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>i Design</h1>
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/posts" component={Posts} />
            <Route component={NotExist} />
          </Switch>
          <div className="App-footer">
            <h2>Footer Area</h2>
          </div>
          
        </div>
      </Router>
    );
  }
}

export default App;