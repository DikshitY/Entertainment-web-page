import { addBookmark, removeBookmark } from "../store";
import { useDispatch } from "react-redux";
import { useState } from "react";

function MovieShow({movie}){
    const dispatch = useDispatch();
    const [isBookmarked, setIsBookmarked] = useState(false)

    const handleClick = () => {
        if(isBookmarked){   
            dispatch(removeBookmark(movie))
            setIsBookmarked(false)
        }else{
            dispatch(addBookmark(movie))
            setIsBookmarked(true)
        }
    }

    return <div>
        {movie.original_title}
        <button onClick={handleClick}>{isBookmarked ? "remove" : "add"}</button>
    </div>
}

export default MovieShow;