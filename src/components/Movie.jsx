import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";

const Movie = ({ movie }) => {
  const { _id, poster, title, genre, year, duration, rating } = movie;

  return (
    <div className="border border-gray-600 p-5 rounded-md bg-[#14161aa9] flex flex-col justify-between">
      <figure>
        <img
          src={poster}
          className="h-52 w-full object-cover rounded-md"
          alt=""
        />
      </figure>
      <div className="space-y-2 mt-6">
        <h2 className="text-2xl md:text-3xl font-bold text-red-600">{title}</h2>
        <p className="text-gray-300 flex items-center gap-2">
          <span className="text-lg font-semibold text-white">Genre: </span>|
          {genre.map((singleGenre, index) => (
            <p key={index}>{singleGenre} |</p>
          ))}
        </p>
        <p className="text-gray-300">
          <span className="text-lg font-semibold text-white">Duration: </span>
          {duration} minutes
        </p>
        <p className="text-gray-300">
          <span className="text-lg font-semibold text-white">
            Releasing Year:{" "}
          </span>
          {year}
        </p>
        <p className="text-gray-300 flex items-center gap-2">
          <span className="text-lg font-semibold text-white">Rating: </span>
          <Rating size={30} initialValue={rating} readonly />
        </p>
      </div>
      <button className="bg-yellow-600 w-full px-6 py-2 rounded-md text-white font-semibold text-lg mt-6 hover:bg-amber-500">
        <Link to={`/movie_details/${_id}`}>See Details</Link>
      </button>
    </div>
  );
};

export default Movie;
