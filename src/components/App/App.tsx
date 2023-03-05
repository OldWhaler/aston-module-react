import { Routes, Route } from 'react-router';
import { Provider } from 'react-redux';
import { useEffect } from 'react';

import store from '../../store';
import { Layout } from '../Layout';
import { RegistrationPage } from '../../pages/RegistrationPage';

import './App.scss';

function App() {
  useEffect(() => {
    if (!localStorage.getItem('users')) localStorage.setItem('users', JSON.stringify([]))
  }, [])

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