import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from './components/App';
import './index.css';

const container = document.getElementById('root')!;
const root = createRoot(container);

if (!localStorage.getItem('users')) localStorage.setItem('users', JSON.stringify([]))

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
