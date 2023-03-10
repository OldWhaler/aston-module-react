import { Middleware } from 'redux';
import { UserData } from '../store/userSlice';

import {
  setNewUserDataInStore,
  returnToInitialState,
  setUserDataFromLocalStorage,
  addToFavorites,
  removeFromFavorites
} from '../store/userSlice';

export const localStorageMiddleware: Middleware = store => next => action => {
  switch (action.type) {
    case setNewUserDataInStore.type: {
      const localStorageUsersString = localStorage.getItem('users');

      if (localStorageUsersString) {
        const users: UserData[] = JSON.parse(localStorageUsersString);
        localStorage.setItem('users', JSON.stringify([...users, action.payload]));
      }
    }
      break;

    case returnToInitialState.type: {
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

    case setUserDataFromLocalStorage.type: {
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

    case addToFavorites.type: {
      const localStorageUsersString = localStorage.getItem('users');

      if (localStorageUsersString) {
        const users: UserData[] = JSON.parse(localStorageUsersString);
        const currentUser: UserData = store.getState().userSlice;

        const newUsersList: UserData[] = users.map(user => {
          if (user.name === currentUser.name) {
            user.favorites.push(action.payload)
          }
          return user
        });
        localStorage.setItem('users', JSON.stringify(newUsersList))
      }
    }
      break;

    case removeFromFavorites.type: {
      const localStorageUsersString = localStorage.getItem('users');

      if (localStorageUsersString) {
        const users: UserData[] = JSON.parse(localStorageUsersString);
        const currentUser: UserData = store.getState().userSlice;

        const newUsersList: UserData[] = users.map(user => {
          if (user.name === currentUser.name) {
            user.favorites = user.favorites.filter(id => id !== action.payload)
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