import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Register from '../pages/RegisterAndUpdate';
import AdminUserHome from '../pages/AdminUserHome';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/adminUser" component={AdminUserHome} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
