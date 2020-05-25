import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';

const App = () => (
  <BrowserRouter>
    <Switch>
      {/* It's just an test */}
      <Route exact path="/Header" component={Header} />
    </Switch>
  </BrowserRouter>
);

export default App;
