import React from 'react';
import { Route, Switch } from 'react-router-dom';

import IndexPage from '../pages/Index';

const App = () => (
  <div>
    <Switch>
      <Route component={IndexPage} />
    </Switch>
  </div>
);

export default App;
