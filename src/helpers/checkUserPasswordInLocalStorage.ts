import type { UserDataInLocalStorage } from "../store/userSlice";

export const checkUserPasswordInLocalStorage = (login: string, password: string) => {
  const usersString = localStorage.getItem('users') as string;
  const users: UserDataInLocalStorage[] = JSON.parse(usersString);
  const user = users.find(user => user.name === login);

  if (user) {
    return user.password === password;
  }
  return false
}