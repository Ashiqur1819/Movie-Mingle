import { useContext } from "react";
import { FavoriteContext } from "../layouts/MainLayout";
import FavoriteCard from "./FavoriteCard";


const MyFavorites = () => {
    const {movies} = useContext(FavoriteContext)
    return (
      <div className="px-4 md:px-8 lg:px-12">
        <h2>My favorites</h2>
        <div>
          <div className=" text-white">
            {movies.map((movie, index) => (
              <FavoriteCard movie={movie} key={movie._id} index={index}></FavoriteCard>
            ))}
          </div>
        </div>
      </div>
    );
};

export default MyFavorites;