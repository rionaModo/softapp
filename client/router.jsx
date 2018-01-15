import React, { Component } from 'react';
import {Link,Route,BrowserRouter as Router} from 'react-router-dom';
import index from './src/views/index.jsx';
import message from './src/views/message.jsx';

import about from './src/views/about/about.jsx';

class router extends Component {
  render() {
    return (
        <Router>
          <div>
              <Route path="/" component={index}></Route>
              <Route path="about" component={about} />
              <Route path="message" component={message}/>
          </div>
        </Router>
    );
  }
}

export default router;
