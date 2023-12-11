import { useDispatch, useSelector } from "react-redux";
import { fetchRecommendedMovies } from "../../store";
import { useEffect } from "react";
import RecommendedMovieShow from "./RecommendedMovieShow";

function RecommendedMovies() {
  const dispatch = useDispatch();
  const recommendedMovies = useSelector(
    (state) => state.movies.recommendedMovies
  );

  useEffect(() => {
    dispatch(fetchRecommendedMovies());
  }, []);
  const renderMovies = recommendedMovies.map(movie => {
    return <RecommendedMovieShow movie={movie} key={movie.id}/>
  })

  return (
    <div>
      {renderMovies}
    </div>
  );
}

export default RecommendedMovies;
