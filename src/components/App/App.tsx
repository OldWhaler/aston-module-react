import { Routes, Route, Navigate } from 'react-router';
import { useEffect } from 'react';

import { Layout } from '../Layout';
import { RegistrationPage } from '../../pages/RegistrationPage';
import { LoginPage } from '../../pages/LoginPage';
import { HistoryPage } from '../../pages/HistoryPage';
import { FavoritesPage } from '../../pages/FavoritesPage';
import { HomePage } from '../../pages/HomePage';

import { useAppDispatch } from '../../hooks/useAppDispatch';
import { searchLoggedUserInLocalStorage } from '../../helpers/searchLoggedUserInLocalStorage';
import { setUserDataFromLocalStorage } from '../../store/userSlice';

import './App.scss';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const loggedUser = searchLoggedUserInLocalStorage();
    if (loggedUser) {
      dispatch(setUserDataFromLocalStorage(loggedUser))
    }
  }, [])

  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<HomePage />} />
        <Route path='registration' element={<RegistrationPage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='history' element={<HistoryPage />} />
        <Route path='favorites' element={<FavoritesPage />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Route>
    </Routes>
  );
}

export { App }