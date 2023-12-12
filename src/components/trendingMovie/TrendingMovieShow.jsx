import { useSelector, useDispatch } from "react-redux";
import { addBookmark, removeBookmark } from "../../store";
import { MdLocalMovies } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";

function TrendingMovieShow({ movie }) {
  const dispatch = useDispatch();
  const isBookmark = useSelector((state) =>
    state.bookmark.bookmarkedMovies.some((item) => item.id === movie.id)
  )
    ? true
    : false;

  const handleClick = () => {
    if (isBookmark) {
      dispatch(removeBookmark(movie));
    } else {
      dispatch(addBookmark(movie));
    }
  };

  const style = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`,
  };

  return (
    <div className="trending-movie movie-wrapper" style={style}>
        <button className="play-btn">
          <div className="play-div">
            <FaCirclePlay />
            Play
          </div>
        </button>
      <div className="trending-detail detail-wrapper">
        <p>{movie.release_date}</p>
        &middot;
        <MdLocalMovies />
        &middot;
        <p>Movie</p>
        &middot;
        <p>{movie.vote_average}</p>
      </div>
      <h3 className="movie-title">{movie.original_title}</h3>
      <button className="bookmark-btn" onClick={handleClick}>
        {isBookmark ? <FaBookmark /> : <FaRegBookmark />}
      </button>
    </div>
  );
}

export default TrendingMovieShow;
