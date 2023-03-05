import { configureStore } from '@reduxjs/toolkit';

import { localStorageMiddleware } from '../middleware/localStorageMiddleware';
import userSlice from './userSlice';

const store = configureStore({
  reducer: {
    userSlice: userSlice,
  },
  middleware: [localStorageMiddleware],
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;