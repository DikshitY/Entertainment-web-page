import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchTVSeries = createAsyncThunk("tvSeries/fetch", async () => {
  const response = await axios.get(
    "http://localhost:3007/tvSeries"
  );

  return response.data;
});

export { fetchTVSeries };
