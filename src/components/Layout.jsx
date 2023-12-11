import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import SearchBar from "./SearchBar";

function Layout(){
    return <div className="site-wrapper">
        <div><SideBar/></div>
        <div>
            <SearchBar/>
            <Outlet/>
        </div>
    </div>
}

export default Layout;