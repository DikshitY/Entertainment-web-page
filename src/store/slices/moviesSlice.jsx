import { createSlice } from "@reduxjs/toolkit";
import { fetchMovies } from "../thunks/fetchMovies";
import { fetchTrendingMovies } from "../thunks/fetchTrendingMovies";
import { fetchRecommendedMovies } from "../thunks/fetchRecommendedMovies";
import { fetchTVSeries } from "../thunks/fetchTVSeries";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    data: [],
    trendingMovies: [],
    recommendedMovies: [],
    tvSeries: [],
    isLoading: false,
    error: null,
  },
  extraReducers(builder) {
    builder.addCase(fetchMovies.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload[0];
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
      state.trendingMovies = action.payload[0];
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
      state.recommendedMovies = action.payload[0];
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
      state.tvSeries = action.payload[0];
    });
    builder.addCase(fetchTVSeries.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});
export const moviesReducer = moviesSlice.reducer;
