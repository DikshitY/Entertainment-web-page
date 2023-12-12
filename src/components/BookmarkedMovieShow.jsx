import { useSelector, useDispatch } from "react-redux";
import { addBookmark, removeBookmark } from "../store";
import { MdLocalMovies } from "react-icons/md";
import { PiTelevisionBold } from "react-icons/pi";
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";

function BookmarkedMovieShow({ item }) {
  const dispatch = useDispatch();
  const isBookmark = useSelector((state) =>
    state.bookmark.bookmarkedMovies.some((movie) => movie.id === item.id)
  )
    ? true
    : false;

  const handleClick = () => {
    if (isBookmark) {
      dispatch(removeBookmark(item));
    } else {
      dispatch(addBookmark(item));
    }
  };

  return (
    <div className="movie-wrapper">
      <div className="img-wrapper">
        <img
          src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
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
        <p>{item.release_date || item.first_air_date}</p>
        &middot;
        {item.name ? <PiTelevisionBold /> : <MdLocalMovies />}
        &middot;
        <p>{item.name ? "TV Series" : "Movie"}</p>
        &middot;
        <p>{item.vote_average}</p>
      </div>
      <h3 className="movie-title">
        {item.original_title || item.original_name}
      </h3>
      <button className="bookmark-btn" onClick={handleClick}>
        {isBookmark ? <FaBookmark /> : <FaRegBookmark />}
      </button>
    </div>
  );
}

export default BookmarkedMovieShow;
