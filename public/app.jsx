import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Main from 'Main';
import { configure } from '../store/configureStore.jsx';
const store = configure();

 ReactDOM.render(
  <Provider store={store}>
    <Main/>
  </Provider>,
  document.getElementById('app')
);
