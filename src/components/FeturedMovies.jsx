import { useContext, useEffect, useState } from "react";
import Movie from "./Movie";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const FeturedMovies = () => {
  const [movies, setMovies] = useState([]);
  const {toggle} = useContext(AuthContext)

  useEffect(() => {
    fetch("https://movie-mingle-server-side.vercel.app/movies")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);

  const sortedMovies = movies.sort((a, b) => b.rating - a.rating);

  return (
    <div>
      <div className="text-center">
        <h2
          className={`text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-500 drop-shadow-sm`}
        >
          Featured Movies
        </h2>
        <p className={`max-w-3xl mx-auto mt-3 ${toggle ? "text-gray-300" : "text-gray-700"}`}>
          Explore our Featured Movies section, showcasing the most popular,
          critically acclaimed, and must-watch films. From timeless classics to
          the latest blockbusters, find your next favorite movie here!
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 mt-12">
        {sortedMovies.slice(0, 8).map((movie) => (
          <Movie movie={movie} key={movie._id}></Movie>
        ))}
      </div>
      <div className="flex items-center justify-center mt-12">
        <button className="bg-green-600 px-6 py-2 rounded-md text-white font-semibold text-lg hover:bg-green-500">
          <Link to="/all_movies">See All Movies</Link>
        </button>
      </div>
    </div>
  );
};

export default FeturedMovies;
