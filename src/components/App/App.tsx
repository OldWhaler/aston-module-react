import { Routes, Route, Navigate } from 'react-router';

import { Layout } from '../Layout';

import { RegistrationPage } from '../../pages/RegistrationPage';
import { LoginPage } from '../../pages/LoginPage';
import { HistoryPage } from '../../pages/HistoryPage';
import { FavoritesPage } from '../../pages/FavoritesPage';
import { HomePage } from '../../pages/HomePage';
import { CharacterPage } from '../../pages/CharacterPage';
import { PrivateWrapper } from '../PrivateWrapper';
import { SearchPage } from '../../pages/SearchPage';

import { useAppDispatch } from '../../hooks/useAppDispatch';
import { searchLoggedUserInLocalStorage } from '../../helpers/searchLoggedUserInLocalStorage';
import { setUserDataFromLocalStorage } from '../../store';

import './App.scss';

function App() {
  const dispatch = useAppDispatch();

  const loggedUser = searchLoggedUserInLocalStorage();
  if (loggedUser) {
    dispatch(setUserDataFromLocalStorage(loggedUser));
  }

  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<HomePage />} />
        <Route path='registration' element={<RegistrationPage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='search' element={<SearchPage />} />
        <Route path='character/:characterId' element={<CharacterPage />} />
        <Route path='history' element={
          <PrivateWrapper redirectPath='/login'>
            <HistoryPage />
          </PrivateWrapper>
        } />
        <Route path='favorites' element={
          <PrivateWrapper redirectPath='/login'>
            <FavoritesPage />
          </PrivateWrapper>
        } />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Route>
    </Routes>
  );
}

export { App };