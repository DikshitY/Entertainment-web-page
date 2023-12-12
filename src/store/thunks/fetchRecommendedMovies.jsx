import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchRecommendedMovies = createAsyncThunk(
  "recommendedMovies/fetch",
  async () => {
    const response = await axios.get(
      "https://moviedata-hpht.onrender.com/recommendedMovies"
    );

    return response.data;
  }
);
export { fetchRecommendedMovies };
