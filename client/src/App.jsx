import React, { Component } from 'react';
import Routers from '../router.jsx';
import header from '../src/header.jsx';
//import logo from './logo.svg';
//import './App.css';
import {Link,Route,BrowserRouter as Router} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="App">
       <div class="header"><header /></div>
        <div class="content">
          <Routers />
        </div>
      </div>
    );
  }
}

export default App;
