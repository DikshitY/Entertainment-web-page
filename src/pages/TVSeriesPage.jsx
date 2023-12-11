import { fetchTVSeries } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import TVSeriesShow from "../components/TVSeriesShow";

function TVSeriesPage(){
    // const dispatch = useDispatch();
    const series = useSelector(state => state.movies.tvSeries)

    // useEffect(() => {
    //     dispatch(fetchTVSeries());
    // },[])

    const renderSeries = series.map(series => {
        return <TVSeriesShow key={series.id} series={series} />
    })

    return <div>
        <h3>TV Series</h3>
        {renderSeries}
    </div>
}

export default TVSeriesPage;