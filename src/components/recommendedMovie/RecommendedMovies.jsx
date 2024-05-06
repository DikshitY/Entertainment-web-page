import { useDispatch, useSelector } from "react-redux";
import { fetchRecommendedMovies } from "../../store";
import { useEffect } from "react";
import RecommendedMovieShow from "./RecommendedMovieShow";

function RecommendedMovies() {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);
  const recommendedMovies = useSelector(
    (state) => state.movies.recommendedMovies
  );

  useEffect(() => {
    dispatch(fetchRecommendedMovies());
  }, []);
  
  const renderMovies = recommendedMovies?.filter((movie) =>
      movie.original_title.toLowerCase().includes(search.toLowerCase())
    )
    .map((movie) => {
      return <RecommendedMovieShow movie={movie} key={movie.id} />;
    });

  return <div className="recommended movies-container">{renderMovies}</div>;
}

export default RecommendedMovies;
