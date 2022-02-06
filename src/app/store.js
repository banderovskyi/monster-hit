import { configureStore } from '@reduxjs/toolkit';
import heroReducer from '../features/Hero/heroSlice';

export const store = configureStore({
  reducer: {
    hero: heroReducer,
  },
});
