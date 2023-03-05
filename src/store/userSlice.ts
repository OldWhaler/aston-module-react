import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserData {
  loginName: string
  password: string
  favorites: number[]
  history: string[]
  isLogged: boolean
};

const initialState: UserData = {
  loginName: '',
  password: '',
  favorites: [],
  history: [],
  isLogged: false,
};

const userSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setNewUserDataInStore(state, action: PayloadAction<UserData>) {
      const { loginName, isLogged, password } = action.payload;
      state.loginName = loginName;
      state.isLogged = isLogged;
      state.password = password;
    },

    setUserDataFromLocalStorage(state, action: PayloadAction<UserData>) {
      const { loginName, isLogged, password, favorites, history } = action.payload;
      state.loginName = loginName;
      state.isLogged = isLogged;
      state.password = password;
      state.favorites = favorites;
      state.history = history;
    },

    addToFavorites(state, action: PayloadAction<number>) {
      state.favorites.push(action.payload)
    },

    removeFromFavorites(state, action: PayloadAction<number>) {
      state.favorites = state.favorites.filter(id => id !== action.payload)
    },

    returnToInitialState(state) {
      state.favorites = [];
      state.history = [];
      state.isLogged = false;
      state.loginName = '';
      state.password = '';
    }
  }
});

export const {
  setNewUserDataInStore,
  returnToInitialState,
  addToFavorites,
  removeFromFavorites,
  setUserDataFromLocalStorage } = userSlice.actions;

export default userSlice.reducer;