import { fetchMovies } from "../store";
import { useDispatch, useSelector } from "react-redux";
import MovieShow from "../components/MovieShow";
import { useEffect } from "react";

function MoviesPage(){
    const dispatch = useDispatch();
    const movies = useSelector(state => state.movies.data)

    useEffect(() => {
        dispatch(fetchMovies())
    },[])

    const renderMovies = movies.map(movie => {
        return <MovieShow key={movie.id} movie={movie}/>
    })

    return <div>
        <h3>Movies</h3>
        {renderMovies}
    </div>
}

export default MoviesPage;