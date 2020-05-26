import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import SideMenu from '../components/SideMenu';
import Register from '../pages/RegisterAndUpdate';
import AdminUserHome from '../pages/AdminUserHome';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/menu" component={SideMenu} />
        <Route exact path="/adminUser" component={AdminUserHome} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
