import { BrowserRouter } from 'react-router-dom'

import { Layout } from '../Layout';

import './App.scss';

function App() {
  return (
    <div className="container">
      <BrowserRouter>

        <Layout />

      </BrowserRouter>
    </div>
  );
}

export { App }