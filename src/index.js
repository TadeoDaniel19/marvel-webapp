import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// Own constants/actions/components
import configureStore from '../src/store/store';

import App from './App';


// Configure store
const store = configureStore();


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') || document.createElement('div'),
);
