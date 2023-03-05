import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { App } from './components/App';
import './index.css';
import store from './store';

const container = document.getElementById('root')!;
const root = createRoot(container);

if (!localStorage.getItem('users')) localStorage.setItem('users', JSON.stringify([]))

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
