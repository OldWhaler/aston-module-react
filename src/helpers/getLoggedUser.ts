import { UserData } from "../store/userSlice";

export const getLoggedUser = () => {
  const usersInLocalStorage = localStorage.getItem('users');

  if (usersInLocalStorage) {
    const users: UserData[] = JSON.parse(usersInLocalStorage);

    for (let user of users) {
      if (user.isLogged) return user
    }

    return null
  }
}