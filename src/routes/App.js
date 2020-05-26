import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Register from '../pages/RegisterAndUpdate';
import Layout from '../components/Layout';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/register" component={Register} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
