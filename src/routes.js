import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

//Components
import Home from './Pages/Home/Home';
import Notes from './Pages/Notes/Notes';

const Routes = () => (
  <Switch>
    <Route exact path="/Home" component={Home} />
    <Route exact path="/Home/Notes" component={Notes} />
    <Redirect to="/Home" />
  </Switch>
);

export default Routes;
