import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import moviesSlice from "./slices/movieSlice";
export const store = configureStore({
  reducer: {
    user: userSlice,
    movies: moviesSlice,
  },
  // middleware: getDefaultMiddleware({
  //   serializableCheck: false,
  // }),
});
