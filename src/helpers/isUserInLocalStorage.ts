import { UserData } from "../store/userSlice";

export const isUserInLocalStorage = (login: string) => {
  const usersString = localStorage.getItem('users') as string;
  const users: UserData[] = JSON.parse(usersString);

  return users.some(user => user.name === login)
}