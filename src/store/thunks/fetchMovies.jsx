import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchMovies = createAsyncThunk("movies/fetch", async () => {
  const response = await axios.get(
    "http://localhost:3007/movies"
  );

  console.log(response.data);
  return response.data;
});

export { fetchMovies };
