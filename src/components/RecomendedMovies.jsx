import { useContext, useEffect, useState } from "react";
import RecomendedMovie from "./RecomendedMovie";
import { AuthContext } from "../provider/AuthProvider";


const RecomendedMovies = () => {
        const [movies, setMovies] = useState([]);
        const {toggle} = useContext(AuthContext)

        useEffect(() => {
          fetch("http://localhost:3000/movies")
            .then((res) => res.json())
            .then((data) => setMovies(data));
        }, []);

        const recomendedMovies = movies.filter((movie) => movie.duration > 150);

    return (
      <div>
        <h2
          className={`text-3xl md:text-4xl lg:text-5xl font-bold ${
            toggle ? "text-yellow-500" : "text-yellow-600"
          }`}
        >
          Recomended For You
        </h2>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-3">
          {recomendedMovies.slice(0, 8).map((movie) => (
            <RecomendedMovie movie={movie} key={movie._id}></RecomendedMovie>
          ))}
        </div>
      </div>
    );
};

export default RecomendedMovies;