import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Register from '../pages/RegisterAndUpdate';
import Layout from '../components/Layout';
import SideMenu from '../components/SideMenu';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/menu" component={SideMenu} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
