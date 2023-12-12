import { useSelector, useDispatch } from "react-redux";
import { fetchTrendingMovies } from "../../store";
import { useEffect } from "react";
import TrendingMovieShow from "./TrendingMovieShow";

function TrendingMovies() {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);
  const trendingMovies = useSelector((state) => state.movies.trendingMovies);

  useEffect(() => {
    dispatch(fetchTrendingMovies());
  }, []);
  const renderMovies = trendingMovies
    .filter((movie) =>
      movie.original_title.toLowerCase().includes(search.toLowerCase())
    )
    .map((movie) => {
      return <TrendingMovieShow key={movie.id} movie={movie} />;
    });

  return <div className="trending-container">{renderMovies}</div>;
}

export default TrendingMovies;
