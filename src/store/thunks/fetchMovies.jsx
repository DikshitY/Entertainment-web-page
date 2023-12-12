import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchMovies = createAsyncThunk("movies/fetch", async () => {
  const response = await axios.get(
    "hhttps://moviedata-hpht.onrender.com/movies"
  );

  return response.data;
});

export { fetchMovies };
