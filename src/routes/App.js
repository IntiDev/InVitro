import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Register from '../pages/RegisterAndUpdate';
import AdminUserHome from '../pages/AdminUserHome';
import Login from '../pages/Login';
import MedicalSearchView from '../pages/MedicalSearchView';
import MedicalViewUSerInfo from '../pages/MedicalViewUserInfo';
import MedicalUserExams from '../pages/MedicalUserExams';
import Bacteriologist from '../pages/BacteriologistHome';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Layout>
        <Route exact path="/adminUser" component={AdminUserHome} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/medical" component={MedicalSearchView} />
        <Route exact path="/medicalUserInfo" component={MedicalViewUSerInfo} />
        <Route exact path="/medicalUserExams" component={MedicalUserExams} />
        <Route exact path="/bacteriologist" component={Bacteriologist} />
      </Layout>
    </Switch>
  </BrowserRouter>
);

export default App;
