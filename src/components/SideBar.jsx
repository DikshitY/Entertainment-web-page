import { NavLink } from "react-router-dom";

function SideBar(){
    return <div className="sidebar">
        <div className="sidebar-wrapper">
            Icon
            <NavLink to="/">Home</NavLink>
            <NavLink to="movies">Movies</NavLink>
            <NavLink to="tvseries">TV Series</NavLink>
            <NavLink to="bookmarked">BookMarked</NavLink>
        </div>
    </div>
}

export default SideBar;