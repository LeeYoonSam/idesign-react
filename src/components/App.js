import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NotExist from './NotExists'

import Home from '../routes/Home';
import Portfolio from '../routes/Portfolio';
import Price from '../routes/Price';
import Contacts from '../routes/Contacts';
import Events from '../routes/Events';


import Header from "../components/story/Header";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Header isIdesign={true} title={"i Design"}></Header>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/price" component={Price} />
            <Route path="/contacts" component={Contacts} />
            <Route path="/events" component={Events} />
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