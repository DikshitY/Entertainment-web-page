import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const removeBookmark = createAsyncThunk("bookmark/remove", async (movie) => {
  const response = await axios.delete(
    `http://localhost:3007/bookmarked/${movie.id}`
  );

  return movie;
});

export { removeBookmark };
