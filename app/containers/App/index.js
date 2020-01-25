/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { config } from 'codemash';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import rinksPage from 'containers/RinksPage/Loadable';
import shopsPage from 'containers/ShopsPage/Loadable';
import tipsPage from 'containers/TipsPage/Loadable';
import gamePage from 'containers/GamePage/Loadable';
import GlobalStyle from '../../global-styles';

config.init({
  projectId: 'e44f5894-44d0-4153-9baf-06c72fd40f68',
  secretKey: 'EuZ5NU3N5dGFj-mB9MbCqUqT8nMsWswE',
});

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/Rinks" component={rinksPage} />
        <Route exact path="/Shops" component={shopsPage} />
        <Route exact path="/Tips" component={tipsPage} />
        <Route exact path="/Game" component={gamePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
