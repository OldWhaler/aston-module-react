import { UserData } from "../store/userSlice";

export const setLoginStatusInLocalStorageToFalse = () => {
  const usersString = localStorage.getItem('users');

  if (usersString) {
    const users: UserData[] = JSON.parse(usersString);
    const newUsersList: UserData[] = users.map(user => {
      user.isLogged = false;
      return user
    });
    localStorage.setItem('users', JSON.stringify(newUsersList))
  }
}