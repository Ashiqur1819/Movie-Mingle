import FavoriteCard from "./FavoriteCard";
import { useLoaderData } from "react-router-dom";


const MyFavorites = () => {
    // const {movies} = useContext(FavoriteContext)
    const favoriteMovies = useLoaderData()
    return (
      <div className="px-4 md:px-8 lg:px-12">
        <h2>My favorites</h2>
        <div>
          <div className=" text-white">
            {favoriteMovies.map((movie, index) => (
              <FavoriteCard
                movie={movie}
                key={movie._id}
                index={index}
              ></FavoriteCard>
            ))}
          </div>
        </div>
      </div>
    );
};

export default MyFavorites;