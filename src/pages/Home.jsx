import Carousel from "../components/Carousel";
import FeturedMovies from "../components/FeturedMovies";
import RecomendedMovies from "../components/RecomendedMovies";
import Reviews from "../components/Reviews";
import TrendingNow from "../components/TrendingNow";

const Home = () => {
  return (
    <div>
      <div>
        <Carousel></Carousel>
      </div>
      <div className="mt-20 px-3 md:px-5 lg:px-6">
        <FeturedMovies></FeturedMovies>
      </div>
      <div className="mt-20 px-3 md:px-5 lg:px-6">
        <TrendingNow></TrendingNow>
      </div>
      <div className="mt-20 px-3 md:px-5 lg:px-6">
        <RecomendedMovies></RecomendedMovies>
      </div>
      <div className="mt-20 px-3 md:px-5 lg:px-6">
        <Reviews></Reviews>
      </div>
    </div>
  );
};

export default Home;
