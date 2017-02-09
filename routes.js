import React from 'react';
import { IndexRoute, Route } from 'react-router';

import App from './views/app';
import ClientContainer from './views/ClientContainer'
import ProjectSection from './views/ProjectSection'

const Routes = (
  <Route path="/" component={App}>
    <IndexRoute component={ClientContainer} />
    <Route path=":projectName" component={ProjectSection} />
  </Route>
);

export default Routes;
