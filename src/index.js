import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './views/App';
import registerServiceWorker from './registerServiceWorker';

/* eslint-disable react/jsx-filename-extension */
ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
