import { NavLink } from "react-router-dom";
import { MdMovie } from "react-icons/md";
import { PiSquaresFourFill } from "react-icons/pi";
import { MdLocalMovies } from "react-icons/md";
import { PiTelevisionBold } from "react-icons/pi";
import { FaBookmark } from "react-icons/fa";

function SideBar() {
    const style = {
        color: "white",
      };

  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <MdMovie />
        <div className="link-wrapper">
          <NavLink
            to="/"
            className="link"
            style={({ isActive }) => (isActive ? style : null)}
          >
            <PiSquaresFourFill />
          </NavLink>
          <NavLink
            to="movies"
            className="link"
            style={({ isActive }) => (isActive ? style : null)}
          >
            <MdLocalMovies />
          </NavLink>
          <NavLink
            to="tvseries"
            className="link"
            style={({ isActive }) => (isActive ? style : null)}
          >
            <PiTelevisionBold />
          </NavLink>
          <NavLink
            to="bookmarked"
            className="link"
            style={({ isActive }) => (isActive ? style : null)}
          >
            <FaBookmark />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
