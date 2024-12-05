import {useEffect, useState } from "react";
import FavoriteCard from "./FavoriteCard";



const MyFavorites = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
      fetch("http://localhost:3000/favourites")
        .then((res) => res.json())
        .then((data) => {
          setMovies(data);
        });
    }, []);

    return (
      <div className="px-4 md:px-8 lg:px-12">
        <div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {movies.map((movie) => (
              <FavoriteCard
                movie={movie}
                key={movie._id}
                movies={movies}
                setMovies={setMovies}
              ></FavoriteCard>
            ))}
          </div>
        </div>
      </div>
    );
};

export default MyFavorites;