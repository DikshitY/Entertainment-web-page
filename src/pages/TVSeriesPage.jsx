import { fetchTVSeries } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import TVSeriesShow from "../components/TVSeriesShow";

function TVSeriesPage() {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);
  const series = useSelector((state) => state.movies.tvSeries);

  useEffect(() => {
    dispatch(fetchTVSeries());
  }, []);

  const renderSeries = series
    .filter((series) =>
      series.original_name.toLowerCase().includes(search.toLowerCase())
    )
    .map((series) => {
      return <TVSeriesShow key={series.id} series={series} />;
    });

  return (
    <div className="page">
      <h2 className="title">TV Series</h2>
      <div className="movies-container">{renderSeries}</div>
    </div>
  );
}

export default TVSeriesPage;
