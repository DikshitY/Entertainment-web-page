import { createSlice } from "@reduxjs/toolkit";
import { fetchMovies } from "../thunks/fetchMovies";
import { fetchTrendingMovies } from "../thunks/fetchTrendingMovies";
import { fetchRecommendedMovies } from "../thunks/fetchRecommendedMovies";
import { fetchTVSeries } from "../thunks/fetchTVSeries";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    data: [],
    bookmarkedMovies: [],
    trendingMovies: [],
    recommendedMovies: [],
    tvSeries: [],
    isLoading: false,
    error: null,
  },
  reducers:{
    addBookmark(state, action){
      state.bookmarkedMovies.push(action.payload)
    },
    removeBookmark(state, action){
      state.bookmarkedMovies = state.bookmarkedMovies.filter(movie => {
        return movie.id !== action.payload.id
      })
    }
  },
  extraReducers(builder) {
    builder.addCase(fetchMovies.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    builder.addCase(fetchTrendingMovies.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTrendingMovies.fulfilled, (state, action) => {
      state.isLoading = false;
      state.trendingMovies = action.payload;
    });
    builder.addCase(fetchTrendingMovies.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    builder.addCase(fetchRecommendedMovies.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchRecommendedMovies.fulfilled, (state, action) => {
      state.isLoading = false;
      state.recommendedMovies = action.payload;
    });
    builder.addCase(fetchRecommendedMovies.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    builder.addCase(fetchTVSeries.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTVSeries.fulfilled, (state, action) => {
      state.isLoading = false;
      state.tvSeries = action.payload;
    });
    builder.addCase(fetchTVSeries.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});
export const moviesReducer = moviesSlice.reducer;
export const {addBookmark, removeBookmark} = moviesSlice.actions;
