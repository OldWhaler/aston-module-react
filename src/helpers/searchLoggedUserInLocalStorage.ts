import { UserDataInLocalStorage } from '../store/userSlice';

export const searchLoggedUserInLocalStorage = () => {
  const usersInLocalStorage = localStorage.getItem('users') as string;
  const users: UserDataInLocalStorage[] = JSON.parse(usersInLocalStorage);

  return users.find(user => user.isLogged) || null;
};