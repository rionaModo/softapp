import React, { Component } from 'react';
import Routers from '../router.jsx';
//import logo from './logo.svg';
//import './App.css';
import {Link,Route,BrowserRouter as Router} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img  className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Routers />
      </div>
    );
  }
}

export default App;
