import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import TVSeriesPage from "./pages/TVSeriesPage";
import BookmarkedPage from "./pages/BookmarkedPage";
import { useDispatch } from "react-redux";
import { fetchBookmarkedMovies } from "./store";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await axios.get(
          "https://api.themoviedb.org/3/discover/movie?api_key=cc4d5b3da2021b4ce4b0139cf2878c78"
        );
        const data1 = response1.data.results;

        const response2 = await axios.get(
          "https://api.themoviedb.org/3/movie/now_playing?api_key=cc4d5b3da2021b4ce4b0139cf2878c78"
        );
        const data2 = response2.data.results;

        const response3 = await axios.get(
          "https://api.themoviedb.org/3/movie/popular?api_key=cc4d5b3da2021b4ce4b0139cf2878c78"
        );
        const data3 = response3.data.results;

        const response4 = await axios.get(
          "https://api.themoviedb.org/3/discover/tv?api_key=cc4d5b3da2021b4ce4b0139cf2878c78"
        );
        const data4 = response4.data.results;
        console.log(data1);
        await axios.post("http://localhost:3007/movies", data1);
        await axios.post("http://localhost:3007/trendingMovies", data2);
        await axios.post("http://localhost:3007/recommendedMovies", data3);
        await axios.post("http://localhost:3007/tvSeries", data4);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
    dispatch(fetchBookmarkedMovies());
  }, []);

  return (
    <div className="main">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="tvSeries" element={<TVSeriesPage />} />
            <Route path="bookmarked" element={<BookmarkedPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
