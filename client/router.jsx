import React, { Component } from 'react';
import {Link,Route,BrowserRouter as Router} from 'react-router-dom';
import index from './src/index.jsx';
import message from './src/message.jsx';

import about from './src/about.jsx';

class router extends Component {
  render() {
    return (

        <Router>
          <Route path="/" component={index}>
            <Route path="about" component={about} />
            <Route path="message" component={message}/>
          </Route>
        </Router>

    );
  }
}

export default router;
