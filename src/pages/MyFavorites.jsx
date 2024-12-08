import { useContext, useEffect, useState } from "react";
import FavoriteCard from "./FavoriteCard";
import { AuthContext } from "../provider/AuthProvider";

const MyFavorites = () => {
  const [movies, setMovies] = useState([]);
  const { user } = useContext(AuthContext);
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
    <div className="px-4 md:px-8 lg:px-12">
      <div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {filteredMovies.map((movie) => (
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
