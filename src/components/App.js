import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import NotExist from './NotExists'
import Home from '../routes/Home';
import Posts from '../routes/Posts';

import Header from "../components/Header";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        {/*<Header isIdesign={true} title={"i Design"}></Header>*/}
          <Header title={"i Design"}></Header>
            <nav>
              <ul style={{height:40}}>
                <li style={{float: "left", display: "block"}}><Link style={{padding: 20}} to="/">iDesign</Link></li>
                <li style={{float: "left", display: "block"}}><Link style={{padding: 20}} to="/posts">Portfolio</Link></li>
                <li style={{float: "left", display: "block"}}><Link style={{padding: 20}} to="/price">Price</Link></li>
              </ul>
            </nav>

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