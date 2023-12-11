import { useSelector } from "react-redux";

function BookmarkedPage(){
    const items = useSelector(state => state.movies.bookmarkedMovies)

    const renderItems = items.map(item => {
        return <p key={item.id}>{item.original_title}</p>
    })

    return <div>
        <h3>Bookmarked</h3>
        {renderItems}
    </div>
}

export default BookmarkedPage;