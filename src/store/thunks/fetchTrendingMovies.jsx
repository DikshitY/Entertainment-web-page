import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchTrendingMovies = createAsyncThunk('trendingMovies/fetch', async () => {
    const response = await axios.get("https://moviedata-hpht.onrender.com/trendingMovies")

    return response.data
})

export {fetchTrendingMovies};