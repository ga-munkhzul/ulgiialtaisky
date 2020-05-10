import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom'

import Home from './components/Home';
import Error from './components/Error';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route component={Error}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
