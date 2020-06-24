import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginContainer from './containers/LoginContainer.jsx';
import MainContainer from './containers/MainContainer.jsx';
import './stylesheets/styles.scss';


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <LoginContainer />
          </Route>
          <Route path="/game">
            <MainContainer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;