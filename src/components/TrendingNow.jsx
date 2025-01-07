import { useContext, useEffect, useState } from "react";
import TrendingMovie from "./TrendingMovie";
import { AuthContext } from "../provider/AuthProvider";


const TrendingNow = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch("https://movie-mingle-server-side.vercel.app/movies")
        .then(res => res.json())
        .then(data => setMovies(data));
    }, [])

    const trendingMovies = movies.filter(movie => movie.rating == 5)
    
    return (
      <div>
        <h2
          className={`text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-500 drop-shadow-sm`}
        >
          Trending Now
        </h2>
        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          {trendingMovies.slice(0, 4).map((movie) => (
            <TrendingMovie movie={movie} key={movie._id}></TrendingMovie>
          ))}
        </div>
      </div>
    );
};

export default TrendingNow;