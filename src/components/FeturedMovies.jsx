import { useEffect, useState } from "react";
import Movie from "./Movie";
import { Link } from "react-router-dom";


const FeturedMovies = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch("https://movie-mingle-server-side.vercel.app/movies")
        .then(res => res.json())
        .then(data => {
            setMovies(data)
        })
    }, [])

    const sortedMovies = movies.sort((a, b) => b.rating - a.rating)


    return (
      <div>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-6xl text-yellow-500 font-bold">
            Featured Movies
          </h2>
          <p className="max-w-3xl mx-auto text-gray-400 mt-3">
            Explore our Featured Movies section, showcasing the most popular,
            critically acclaimed, and must-watch films. From timeless classics
            to the latest blockbusters, find your next favorite movie here!
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {sortedMovies.slice(0, 6).map((movie) => (
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