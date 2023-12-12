import { useSelector } from "react-redux";
import BookmarkedMovieShow from "../components/BookmarkedMovieShow";

function BookmarkedPage() {
  const items = useSelector((state) => state.bookmark.bookmarkedMovies);
  const search = useSelector((state) => state.search);

  // const displayItems = items.filter(item)
  const renderItems = items
    .filter((item) =>
      (item.original_title || item.original_name)
        .toLowerCase()
        .includes(search.toLowerCase())
    )
    .map((item) => {
      return <BookmarkedMovieShow item={item} key={item.id} />;
    });

  return (
    <div className="page">
      <h2 className="title">Bookmarked Movies & TV Series</h2>
      <div className="movies-container">{renderItems}</div>
    </div>
  );
}

export default BookmarkedPage;
