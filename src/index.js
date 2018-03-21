/* eslint-disable react/jsx-filename-extension */

// @flow

import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const root = document.getElementById('root');
if (!root) throw new Error('Root Element not found');

ReactDOM.render(<App />, root);
registerServiceWorker();
