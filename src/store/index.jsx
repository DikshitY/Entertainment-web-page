import { configureStore } from "@reduxjs/toolkit";
import { moviesReducer } from "./slices/moviesSlice";
import { bookmarkReducer } from "./slices/bookmarkSlice";
import { searchReducer, changeSearch } from "./slices/searchSlice";

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    bookmark: bookmarkReducer,
    search: searchReducer,
  },
});

export { store, changeSearch };
export * from "./thunks/fetchMovies";
export * from "./thunks/fetchTrendingMovies";
export * from "./thunks/fetchRecommendedMovies";
export * from "./thunks/fetchTVSeries";
export * from "./thunks/addBookmark";
export * from "./thunks/removeBookmark";
export * from "./thunks/fetchBookmarkedMovies";
