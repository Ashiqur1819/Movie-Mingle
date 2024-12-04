import { useEffect, useState } from "react";
import Movie from "./Movie";


const FeturedMovies = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/movies")
        .then(res => res.json())
        .then(data => {
            setMovies(data)
        })
    }, [])


    return (
      <div>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-6xl text-[#db9512] font-semibold">
            Featured Movies
          </h2>
          <p className="max-w-3xl mx-auto text-gray-400 mt-3">
            Explore our Featured Movies section, showcasing the most popular,
            critically acclaimed, and must-watch films. From timeless classics
            to the latest blockbusters, find your next favorite movie here!
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {
                movies.map(movie => <Movie movie={movie} key={movie._id}></Movie>)
            }
        </div>
      </div>
    );
};

export default FeturedMovies;