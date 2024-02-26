import {configureStore} from '@reduxjs/toolkit';
import apiSlice from '../api/apiSlice';

export const store = configureStore({
  reducer: {
    // Your other reducers here
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
