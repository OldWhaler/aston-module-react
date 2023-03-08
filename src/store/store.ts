import { configureStore } from '@reduxjs/toolkit';
import { charactersAPI } from './charactersAPI';

import { localStorageMiddleware } from '../middleware/localStorageMiddleware';
import userSlice from './userSlice';

export const store = configureStore({
  reducer: {
    userSlice: userSlice,
    [charactersAPI.reducerPath]: charactersAPI.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(charactersAPI.middleware, localStorageMiddleware)
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;