import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';

/* eslint-disable react/jsx-filename-extension */
ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
