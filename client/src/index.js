import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import App from './App';

import makeRoutes from './routes.js'

const routes = makeRoutes()

const mountNode = document.querySelector('#root');
ReactDOM.render(
  <App history={browserHistory}
        routes={routes} />,
mountNode);
