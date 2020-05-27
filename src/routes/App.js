import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Register from '../pages/RegisterAndUpdate';
import Layout from '../components/Layout';
import Login from '../pages/Login';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
