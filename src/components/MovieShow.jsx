import { useSelector, useDispatch } from "react-redux";
import { addBookmark, removeBookmark } from "../store";
import { MdLocalMovies } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";

function MovieShow({ movie }) {
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

  return (
    <div className="movie-wrapper">
      <div className="img-wrapper">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          className="movie-thumbnail"
        />
        <button className="play-btn">
          <div className="play-div">
            <FaCirclePlay />
            Play
          </div>
        </button>
      </div>
      <div className="detail-wrapper">
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
export default MovieShow;
