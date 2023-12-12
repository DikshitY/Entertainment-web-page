import { fetchMovies } from "../store";
import { useDispatch, useSelector } from "react-redux";
import MovieShow from "../components/MovieShow";
import { useEffect } from "react";

function MoviesPage() {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);
  const movies = useSelector((state) => state.movies.data);

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  const renderMovies = movies
    .filter((movie) =>
      movie.original_title.toLowerCase().includes(search.toLowerCase())
    )
    .map((movie) => {
      return <MovieShow key={movie.id} movie={movie} />;
    });

  return (
    <div className="page">
      <h2 className="title">Movies</h2>
      <div className="movies-container">{renderMovies}</div>
    </div>
  );
}

export default MoviesPage;
