import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled, { css } from 'styled-components';

import Home from './pages/home';

const GlobalStyles = () => css`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transition: all 0.3s ease-in-out;
  font-family: 'OpenSans';
`;

const GlobalContainer = styled.div([GlobalStyles]);

function Routes() {
  return (
    <BrowserRouter>
      <GlobalContainer>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </GlobalContainer>
    </BrowserRouter>
  );
}

export default Routes;
