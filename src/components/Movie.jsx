import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Movie = ({ movie }) => {
  const { _id, poster, title, genre, summary } = movie;
  const {toggle} = useContext(AuthContext)

  return (
    <div
      className={`p-3 rounded-md  flex flex-col justify-between transition-all duration-300 hover:scale-95 ${
        toggle
          ? "bg-[#14161aa9] border border-gray-700 "
          : "bg-white border border-white shadow"
      }`}
    >
      <figure>
        <img
          src={poster}
          className="h-52 w-full object-cover rounded-md"
          alt=""
        />
      </figure>
      <div className="space-y-2 mt-2">
        <h2 className="text-xl font-bold text-red-600 mb-3">{title}</h2>
        <div className="text-gray-500 flex items-center gap-2">
          {genre.map((singleGenre, index) => (
            <p
              key={index}
              className="bg-gray-700 text-gray-300 px-3 py-1 text-sm font-medium rounded-sm"
            >
              {singleGenre}
            </p>
          ))}
        </div>
        <p
          className={`text-justify ${
            toggle ? "text-gray-400 " : "text-gray-600"
          }`}
        >
          {summary.substring(0, 75)}...
        </p>
      </div>
      <button
        className={`font-medium w-fit mt-3 text-left underline hover:text-yellow-500 ${toggle ? "text-white " : "text-gray-700"}`}
      >
        <Link to={`/movie_details/${_id}`}>See Details</Link>
      </button>
    </div>
  );
};

export default Movie;
