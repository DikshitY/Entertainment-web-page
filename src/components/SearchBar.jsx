import { GoSearch } from "react-icons/go";

function SearchBar(){
    return <div>
        <form >
        <GoSearch />
        <input type="text" placeholder="Search for movies or TV series"/>
        </form>
    </div>
}

export default SearchBar;