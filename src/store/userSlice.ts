import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface UserData {
  name: string
  favorites: number[]
  history: string[]
  isLogged: boolean
};
export interface UserDataInLocalStorage extends UserData {
  password: string
}

const initialState: UserData = {
  name: '',
  favorites: [],
  history: [],
  isLogged: false,
};

const userSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setNewUserDataInStore(state, action: PayloadAction<UserDataInLocalStorage>) {
      const { name, isLogged } = action.payload;
      state.name = name;
      state.isLogged = isLogged;
    },

    setUserDataFromLocalStorage(state, action: PayloadAction<UserData>) {
      const { name, isLogged, favorites, history } = action.payload;
      state.name = name;
      state.isLogged = isLogged;
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
      state.name = '';
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