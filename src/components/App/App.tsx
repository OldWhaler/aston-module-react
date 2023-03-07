import { Routes, Route } from 'react-router';

import { Layout } from '../Layout';
import { RegistrationPage } from '../../pages/RegistrationPage';

import './App.scss';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useEffect } from 'react';
import { getLoggedUser } from '../../helpers/getLoggedUser';
import { setUserDataFromLocalStorage } from '../../store/userSlice';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const loggedUser = getLoggedUser();
    if (loggedUser) {
      dispatch(setUserDataFromLocalStorage(loggedUser))
    }
  }, [])

  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route path='registration' element={<RegistrationPage />} />
      </Route>
    </Routes>
  );
}

export { App }