import { Middleware } from 'redux';
import { UserData } from '../store/userSlice';

export const localStorageMiddleware: Middleware = store => next => action => {
  switch (action.type) {
    case 'userData/setNewUserDataInStore': {
      const localStorageUsersString = localStorage.getItem('users');

      if (localStorageUsersString) {
        const users: UserData[] = JSON.parse(localStorageUsersString);
        localStorage.setItem('users', JSON.stringify([...users, action.payload]));
      }
    }
      break;

    case 'userData/returnToInitialState': {
      const localStorageUsersString = localStorage.getItem('users');

      if (localStorageUsersString) {
        const users: UserData[] = JSON.parse(localStorageUsersString);
        const currentUser = store.getState().userSlice;

        const newUsersList: UserData[] = users.map(user => {
          if (user.name === currentUser.name) {
            user.isLogged = false;
          }
          return user
        });
        localStorage.setItem('users', JSON.stringify(newUsersList))
      }
    }
      break;

    case 'userData/setUserDataFromLocalStorage': {
      const localStorageUsersString = localStorage.getItem('users');

      if (localStorageUsersString) {
        const users: UserData[] = JSON.parse(localStorageUsersString);
        const currentUserName = action.payload.name;

        const newUsersList: UserData[] = users.map(user => {
          if (user.name === currentUserName) {
            user.isLogged = true;
          }
          return user
        });
        localStorage.setItem('users', JSON.stringify(newUsersList))
      }
    }
      break;

    default:
      break;
  }
  next(action);
}