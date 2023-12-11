import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchTrendingMovies = createAsyncThunk('trendingMovies/fetch', async () => {
    const response = await axios.get("http://localhost:3007/trendingMovies")

    return response.data
})

export {fetchTrendingMovies};