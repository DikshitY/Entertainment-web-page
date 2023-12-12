import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchBookmarkedMovies = createAsyncThunk('bookmarkedMovies/fetch',async ()=>{
    const response = await axios.get('https://moviedata-hpht.onrender.com/bookmarked')

    return response.data
})

export {fetchBookmarkedMovies};