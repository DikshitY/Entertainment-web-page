import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const addBookmark = createAsyncThunk('bookmark/add', async (movie) => {
    const response = await axios.post("https://moviedata-hpht.onrender.com/bookmarked", movie)

    console.log(response.data);
    return response.data
})

export {addBookmark};