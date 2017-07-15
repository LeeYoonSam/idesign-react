import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from '../logo.svg';
import './App.css';

import NotExist from './NotExists'
import Home from '../routes/Home';
import Posts from '../routes/Posts';
import { Tab, Tabs } from "../components/Tabs";

import Header from "../components/Header";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header isIdesign={true} title={"i Design"}></Header>

          <Tabs id="tabbedNavigation" navigationHeight={80} navigationSticky={true}>
              <Tab label="iDesign" active>Home</Tab>
              <Tab label="Portfolio">Portfolio</Tab>
              <Tab label="Price">Price</Tab>
              <Tab label="Contact">Contact</Tab>
              <Tab label="Chat">Chat</Tab>
          </Tabs>
          

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