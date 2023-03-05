import { Middleware } from 'redux';
import { UserData } from '../store/userSlice';

export const localStorageMiddleware: Middleware = store => next => action => {
  const localStorageUsersString = localStorage.getItem('users') as string;
  const users: UserData[] = JSON.parse(localStorageUsersString);

  switch (action.type) {
    case 'userData/setNewUserDataInStore':
      localStorage.setItem('users', JSON.stringify([...users, action.payload]));
      break;

    case 'userData/returnToInitialState':
      const newUsersList: UserData[] = users.map(user => {
        user.isLogged = false;
        return user
      });
      localStorage.setItem('users', JSON.stringify(newUsersList))
      break;

    default:
      break;
  }
  next(action);
}