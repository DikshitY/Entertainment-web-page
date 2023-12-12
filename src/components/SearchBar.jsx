import { GoSearch } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { changeSearch } from "../store";

function SearchBar() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.search);

  const handleChange = (event) => {
    dispatch(changeSearch(event.target.value));
  };

  return (
    <div className="search-bar">
      <div className="search-wrapper">
        <GoSearch />
        <input
          type="text"
          placeholder="Search for movies or TV series"
          value={searchTerm}
          onChange={handleChange}
          className="search-input"
        />
      </div>
    </div>
  );
}

export default SearchBar;
