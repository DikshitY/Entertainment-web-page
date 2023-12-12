import TrendingMovies from "../components/trendingMovie/TrendingMovies";
import RecommendedMovies from "../components/recommendedMovie/RecommendedMovies";

function HomePage() {
  return (
    <div className="home page">
      <div className="trending-section">
        <h2 className="title">Trending Movies</h2>
        <TrendingMovies />
      </div>
      <div className="recommended-section">
        <h2 className="title">Recommended for you</h2>
          <RecommendedMovies />
      </div>
    </div>
  );
}

export default HomePage;
