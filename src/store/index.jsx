import { configureStore } from "@reduxjs/toolkit";
import { moviesReducer } from "./slices/moviesSlice";
import { addBookmark, removeBookmark } from "./slices/moviesSlice";

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

export { store, addBookmark, removeBookmark };
export * from "./thunks/fetchMovies";
export * from "./thunks/fetchTrendingMovies";
export * from "./thunks/fetchRecommendedMovies";
export * from "./thunks/fetchTVSeries";
