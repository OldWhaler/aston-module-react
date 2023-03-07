import { UserData } from "../store/userSlice";

export const getLoggedUser = () => {
  const usersInLocalStorage = localStorage.getItem('users') as string;
  const users: UserData[] = JSON.parse(usersInLocalStorage);

  return users.find(user => user.isLogged) || null
}