import { Middleware } from 'redux';
import { UserData } from '../store/userSlice';

export const localStorageMiddleware: Middleware = store => next => action => {
  const localStorageUsersString = localStorage.getItem('users');

  if (action.type === 'userData/setNewUserDataInStore' && localStorageUsersString) {
    const localStorageUsersList: UserData[] = JSON.parse(localStorageUsersString);
    localStorage.setItem('users', JSON.stringify([...localStorageUsersList, action.payload]));
  }
  next(action);
}