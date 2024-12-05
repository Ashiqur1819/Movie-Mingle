import { useContext, useEffect, useState } from "react";
import FavoriteCard from "./FavoriteCard";
// import { FavoriteContext } from "../layouts/MainLayout";
// import { useLoaderData } from "react-router-dom";


const MyFavorites = () => {
    // const {movies} = useContext(FavoriteContext)
    // const favoriteMovies = useLoaderData()
    // console.log(favoriteMovies)

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
        <h2>My favorites</h2>
        <div>
          <div className=" text-white">
            {movies.map((movie, index) => (
              <FavoriteCard
                movie={movie}
                key={movie._id}
                index={index}
                movies={movies}
                setMovies={setMovies}
                // favoriteMovies={favoriteMovies}
              ></FavoriteCard>
            ))}
          </div>
        </div>
      </div>
    );
};

export default MyFavorites;