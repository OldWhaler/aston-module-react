import { UserData } from "../store/userSlice";

export const isUserInLocalStorage = (login: string) => {
  const usersString = localStorage.getItem('users');

  if (usersString) {
    const users: UserData[] = JSON.parse(usersString);
    for (let user of users) {
      if (user.loginName === login) return true
    }
  }

  return false
}