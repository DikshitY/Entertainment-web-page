import { createSlice } from "@reduxjs/toolkit";
import { addBookmark } from "../thunks/addBookmark";
import { removeBookmark } from "../thunks/removeBookmark";
import { fetchBookmarkedMovies } from "../thunks/fetchBookmarkedMovies";

const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState: {
    bookmarkedMovies: [],
    isLoading: false,
    error: null,
  },
  extraReducers(builder) {
    builder.addCase(addBookmark.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addBookmark.fulfilled, (state, action) => {
      state.isLoading = false;
      state.bookmarkedMovies.push(action.payload);
    });
    builder.addCase(addBookmark.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    builder.addCase(removeBookmark.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(removeBookmark.fulfilled, (state, action) => {
      state.isLoading = false;
      state.bookmarkedMovies = state.bookmarkedMovies.filter((movie) => {
        return movie.id !== action.payload.id;
      });
    });
    builder.addCase(removeBookmark.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    builder.addCase(fetchBookmarkedMovies.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchBookmarkedMovies.fulfilled, (state, action) => {
      state.isLoading = false;
      state.bookmarkedMovies = action.payload;
    });
    builder.addCase(fetchBookmarkedMovies.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const bookmarkReducer = bookmarkSlice.reducer;
