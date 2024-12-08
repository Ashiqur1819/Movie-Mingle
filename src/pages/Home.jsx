import FeturedMovies from "../components/FeturedMovies";
import Slider from "../components/Slider";
import TrendingNow from "../components/TrendingNow";

const Home = () => {
  return (
    <div>
      <div>
        <Slider></Slider>
      </div>
      <div className="mt-20 px-4 md:px-8 lg:px-12">
        <FeturedMovies></FeturedMovies>
      </div>
      <div className="mt-20 px-4 md:px-8 lg:px-12">
        <TrendingNow></TrendingNow>
      </div>
    </div>
  );
};

export default Home;
