import { useContext, useEffect, useState } from "react";
import FavoriteCard from "./FavoriteCard";
import { AuthContext } from "../provider/AuthProvider";

const MyFavorites = () => {
  const [movies, setMovies] = useState([]);
  const { user, toggle } = useContext(AuthContext);
  const email = user.email;

  const filteredMovies = movies.filter((movie) => movie?.userEmail === email);

  useEffect(() => {
    fetch("https://movie-mingle-server-side.vercel.app/favourites")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      })
      .catch(() => {
 
      })
  }, []);

  return (
    <div className="px-3 md:px-5 lg:px-6 mt-20">
      <div>
        <h2
          className={`text-3xl md:text-4xl font-bold t ${
            toggle ? "text-gray-300" : "text-gray-700"
          }`}
        >
          My Favourite Movies
        </h2>
        <div className="overflow-x-auto mt-12">
          <table className="table">
            <thead>
              <tr className="text-yellow-500 text-lg font-sans">
                <th></th>
                <th className="font-medium drop-shadow-sm">Movie Poster</th>
                <th className="font-medium drop-shadow-sm">Movie Name</th>
                <th className="font-medium drop-shadow-sm">Release Year</th>
                <th className="font-medium drop-shadow-sm">Rating</th>
                <th className="font-medium drop-shadow-sm">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredMovies.map((movie) => (
                <FavoriteCard
                  movie={movie}
                  key={movie._id}
                  movies={movies}
                  setMovies={setMovies}
                ></FavoriteCard>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyFavorites;
