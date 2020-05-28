import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Register from '../pages/RegisterAndUpdate';
import AdminUserHome from '../pages/AdminUserHome';
import Login from '../pages/Login';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/adminUser" component={AdminUserHome} />
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
