import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './Main';
import Forecast from './Forecast';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/forecast' component={Forecast} />
        </Switch>
      </Router>
    )
  }
}

export default App;