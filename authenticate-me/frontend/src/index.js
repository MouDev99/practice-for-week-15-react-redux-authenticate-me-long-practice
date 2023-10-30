import React from 'react';

import './index.css';

import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import configureStore from './store';

const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
  window.store = store;
}

function AppRoot() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  )
};

const Root = ReactDOM.createRoot(document.getElementById("root"));

Root.render(
  <React.StrictMode>
    <AppRoot />
  </React.StrictMode>
);
