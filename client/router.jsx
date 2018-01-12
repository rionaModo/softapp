import React, { Component } from 'react';
import {Link,Route,BrowserRouter as Router} from 'react-router-dom';
import index from './src/index.jsx';
import message from './src/message.jsx';

import about from './src/about.jsx';

class router extends  React.Component {
  render() {
    return (
        <Router>
          <div>
            <Route path="/" component={index} />
            <Route path="/message" component={message}/>
            <Route path="/about" component={about} />
            </div>
        </Router>
    );
  }
}

/*class router extends  React.Component {
  render() {
    return (
      <div>
        <Route path="/" component={index}></Route>
        <Route path="/message" component={message}/>
        <Route path="/about" component={about} />
      </div>
    );
  }
}*/
export default router;
