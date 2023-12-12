import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchTVSeries = createAsyncThunk("tvSeries/fetch", async () => {
  const response = await axios.get(
    "https://moviedata-hpht.onrender.com/tvSeries"
  );

  return response.data;
});

export { fetchTVSeries };
