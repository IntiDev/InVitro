import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import Layout from '../components/Layout';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        {/* It's just an test */}
        <Route exact path="/Header" component={Header} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
