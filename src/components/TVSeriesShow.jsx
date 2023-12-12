import { useSelector, useDispatch } from "react-redux";
import { addBookmark, removeBookmark } from "../store";
import { PiTelevisionBold } from "react-icons/pi";
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";

function TVSeriesShow({ series }) {
  const dispatch = useDispatch();
  const isBookmark = useSelector((state) =>
    state.bookmark.bookmarkedMovies.some((item) => item.id === series.id)
  )
    ? true
    : false;

  const handleClick = () => {
    if (isBookmark) {
      dispatch(removeBookmark(series));
    } else {
      dispatch(addBookmark(series));
    }
  };

  return (
    <div className="movie-wrapper">
      <div className="img-wrapper">
        <img
          src={`https://image.tmdb.org/t/p/w500${series.backdrop_path}`}
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
        <p>{series.first_air_date}</p>
        &middot;
        <PiTelevisionBold />
        &middot;
        <p>TV Series</p>
        &middot;
        <p>{series.vote_average}</p>
      </div>
      <h3 className="movie-title">{series.original_name}</h3>
      <button className="bookmark-btn" onClick={handleClick}>
        {isBookmark ? <FaBookmark /> : <FaRegBookmark />}
      </button>
    </div>
  );
}

export default TVSeriesShow;
