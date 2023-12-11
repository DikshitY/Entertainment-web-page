import TrendingMovies from "../components/trendingMovie/TrendingMovies";
import RecommendedMovies from "../components/recommendedMovie/RecommendedMovies";

function HomePage() {
  return (
    <div>
      <div>
        <h3>Trending Movies</h3>
        <TrendingMovies />
      </div>
      <div>
        <h3>Recommended for you</h3>
        <RecommendedMovies />
      </div>
    </div>
  );
}

export default HomePage;
