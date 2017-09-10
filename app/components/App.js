import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './Main';
import Forecast from './Forecast';
import Detail from './Detail';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/forecast' component={Forecast} />
          <Route path='/detail/' component={Detail} />
        </Switch>
      </Router>
    )
  }
}

export default App;