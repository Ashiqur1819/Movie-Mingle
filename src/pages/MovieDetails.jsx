import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { FavoriteContext } from "../layouts/MainLayout";


const MovieDetails = () => {

    const movie = useLoaderData()
   const {_id, poster, title, genre, year, duration, rating, summary } = movie;
   const {movies, setMovies, handleAddToFavourite} = useContext(FavoriteContext)
   const navigate = useNavigate()

   const handleDeleteMovie = _id => {
        fetch(`http://localhost:3000/movies/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // data.deletedCount > 0
            const remainingMovies = movies.filter((movie) => movie._id !== _id);
            setMovies(remainingMovies);
            navigate("/all_movies")
          });
   }

    return (
      <div className="max-w-5xl mx-auto border grid md:grid-cols-2 items-center gap-12 mt-12 mb-12 p-12 rounded-md">
        <div>
          <img
            src={poster}
            className="h-96 w-full object-cover rounded-md"
            alt=""
          />
        </div>
        <div>
          <div className="space-y-2">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-red-600">
              {title}
            </h2>
            <p className="text-gray-300">
              <span className="text-lg font-semibold text-white">Genre: </span>
              {genre}
            </p>
            <p className="text-gray-300">
              <span className="text-lg font-semibold text-white">
                Duration:{" "}
              </span>
              {duration} minutes
            </p>
            <p className="text-gray-300">
              <span className="text-lg font-semibold text-white">
                Releasing Year:{" "}
              </span>
              {year}
            </p>
            <p className="text-gray-300">
              <span className="text-lg font-semibold text-white">Rating: </span>
              {rating}
            </p>
            <p className="text-gray-300">
              <span className="text-lg font-semibold text-white">
                Description:{" "}
              </span>
              {summary}
            </p>
          </div>
          <div className="flex items-center gap-6 mt-6">
            <button onClick={() => handleAddToFavourite(_id)} className="bg-[#c78201] w-full px-6 py-2 rounded-md text-white font-semibold text-lg">
              Add To Favourite
            </button>
            <button onClick={() => {handleDeleteMovie(_id)}} className="bg-red-600 w-full px-6 py-2 rounded-md text-white font-semibold text-lg ">
              Delete Movie
            </button>
          </div>
        </div>
      </div>
    );
};

export default MovieDetails;