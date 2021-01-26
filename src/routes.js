import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

/**
 * Arquivo para roteamento das paginas do site
 */
import Navbar from './components/Navbar/Navbar';

import Home from './pages/home';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Navbar />,
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;