import { useContext } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { FavoriteContext } from "../layouts/MainLayout";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";
import { Rating } from "react-simple-star-rating";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { MdLibraryAdd } from "react-icons/md";

const MovieDetails = () => {
  const movie = useLoaderData();
  const { _id, poster, title, genre, year, duration, rating, summary } = movie;
  const { toggle } = useContext(AuthContext);
  const { movies, setMovies, handleAddToFavourite } =
    useContext(FavoriteContext);
  const navigate = useNavigate();

  const handleDeleteMovie = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://movie-mingle-server-side.vercel.app/movies/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your movie has been deleted.",
                icon: "success",
              });

              const remainingMovies = movies.filter(
                (movie) => movie._id !== _id
              );
              setMovies(remainingMovies);
              navigate("/all_movies");
            }
          });
      }
    });
  };

  return (
    <div className="w-11/12 mx-auto">
      <div
        className={`max-w-5xl mx-auto  grid lg:grid-cols-2 items-center gap-6 mt-12 mb-12 p-6 rounded-md ${
          toggle ? "bg-[#000e0f] border border-gray-700" : "bg-white border border-white"
        }`}
      >
        <div className="h-full">
          <img
            src={poster}
            className="h-full w-full object-cover rounded-md"
            alt=""
          />
        </div>
        <div>
          <div className="space-y-2">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-red-600 mb-6">
              {title}
            </h2>
            <div className="flex flex-row gap-3 mt-2">
              <p
                className={`text-lg font-semibold ${
                  toggle ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Genre:
              </p>
              {genre.map((g, index) => (
                <p
                  key={index}
                  className="bg-gray-600 text-yellow-500 rounded-sm font-medium px-3 py-1 text-sm"
                >
                  {g}
                </p>
              ))}
            </div>
            <p className={`${toggle ? "text-gray-300" : "text-gray-600"}`}>
              <span
                className={`text-lg font-semibold ${
                  toggle ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Duration:{" "}
              </span>
              {duration} minutes
            </p>
            <p className={`${toggle ? "text-gray-300" : "text-gray-600"}`}>
              <span
                className={`text-lg font-semibold ${
                  toggle ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Releasing Year:{" "}
              </span>
              {year}
            </p>
            <p className={`${toggle ? "text-gray-300" : "text-gray-600"}`}>
              <span
                className={`text-lg font-semibold ${
                  toggle ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Rating:{" "}
              </span>
              <Rating size={25} initialValue={rating} readonly />
            </p>
            <p className={`text-justify ${toggle ? "text-gray-300" : "text-gray-600"}`}>
              <span
                className={`text-lg font-semibold ${
                  toggle ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Description:{" "}
              </span>
              {summary}
            </p>
          </div>
          <div className="flex items-center gap-6 mt-6">
            <button
              onClick={() => handleAddToFavourite(_id)}
              className="bg-yellow-600 py-2 px-4 rounded-md text-white font-semibold text-lg hover:bg-amber-500"
            >
              <MdLibraryAdd className="text-xl"></MdLibraryAdd>
            </button>
            <button
              onClick={() => {
                handleDeleteMovie(_id);
              }}
              className=" bg-red-700 px-4 py-2 rounded-md text-white font-semibold text-lg hover:bg-red-600"
            >
              <FaTrashAlt className="text-xl"></FaTrashAlt>
            </button>
            <button className=" bg-green-600 px-4 py-2 rounded-md text-white font-semibold text-lg hover:bg-green-500">
              <Link to={`/update_movie/${_id}`}>
                <FaEdit className="text-xl"></FaEdit>
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-12">
        <button className="bg-green-600 px-6 py-2 rounded-md text-white font-semibold text-lg hover:bg-green-500">
          <Link to="/all_movies">See All Movies</Link>
        </button>
      </div>
    </div>
  );
};

export default MovieDetails;
