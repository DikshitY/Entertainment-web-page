import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchBookmarkedMovies = createAsyncThunk('bookmarkedMovies/fetch',async ()=>{
    const response = await axios.get('http://localhost:3007/bookmarked')

    return response.data
})

export {fetchBookmarkedMovies};