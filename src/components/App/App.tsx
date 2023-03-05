import { Routes, Route } from 'react-router';
import { Provider } from 'react-redux';

import store from '../../store';
import { Layout } from '../Layout';
import { RegistrationPage } from '../../pages/RegistrationPage';

import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route path='registration' element={<RegistrationPage />} />
        </Route>
      </Routes>
    </Provider>
  );
}

export { App }