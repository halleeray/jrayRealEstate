
import { configureStore } from '@reduxjs/toolkit';
import { savesReducer } from './saveSlice';

export const store = configureStore({
  reducer: {
    saves: savesReducer, 
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
