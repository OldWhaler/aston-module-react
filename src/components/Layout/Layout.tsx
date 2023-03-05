import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';

import { Outlet } from 'react-router-dom';
import { Header } from "../Header";
import { getLoggedUser } from '../../helpers/getLoggedUser';
import { setUserDataFromLocalStorage } from '../../store/userSlice';

const Layout = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const loggedUser = getLoggedUser();
    if (loggedUser) {
      dispatch(setUserDataFromLocalStorage(loggedUser))
    }
  }, [])

  return (
    <div className="container">
      <Header />

      <Outlet />
    </div>
  )
}

export { Layout }