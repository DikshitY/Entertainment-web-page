import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchRecommendedMovies = createAsyncThunk(
  "recommendedMovies/fetch",
  async () => {
    const response = await axios.get(
      "http://localhost:3007/recommendedMovies"
    );

    return response.data;
  }
);
export { fetchRecommendedMovies };
