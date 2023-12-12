import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const removeBookmark = createAsyncThunk("bookmark/remove", async (movie) => {
  const response = await axios.delete(
    `https://moviedata-hpht.onrender.com/bookmarked/${movie.id}`
  );

  return movie;
});

export { removeBookmark };
