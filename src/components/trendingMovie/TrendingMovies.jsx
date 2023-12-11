import { useSelector, useDispatch } from "react-redux";
import { fetchTrendingMovies } from "../../store";
import { useEffect } from "react";
import TrendingMovieShow from "./TrendingMovieShow";

function TrendingMovies() {
  const dispatch = useDispatch();
  const trendingMovies = useSelector((state) => state.movies.trendingMovies);

  useEffect(() => {
      dispatch(fetchTrendingMovies())
  }, [])
  const renderMovies = trendingMovies.map(movie => {
      return (
          <TrendingMovieShow key={movie.id} movie={movie}/>
      )
  })

  return (
    <div>
      {renderMovies}
    </div>
  );
}

export default TrendingMovies;
