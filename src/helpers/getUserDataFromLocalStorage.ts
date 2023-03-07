import type { UserDataInLocalStorage } from "../store/userSlice";

export const getUserDataFromLocalStorage = (login: string) => {
  const usersInLocalStorage = localStorage.getItem('users') as string;
  const users: UserDataInLocalStorage[] = JSON.parse(usersInLocalStorage);

  return users.find(user => user.name === login) as UserDataInLocalStorage;
}
