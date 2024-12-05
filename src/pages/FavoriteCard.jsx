// import React, { useContext } from 'react';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';


const FavoriteCard = ({ movie, movies, setMovies }) => {
  const { _id, poster, title, genre, year, duration, rating } = movie;
  // const { movies, setMovies } = useContext(FavoriteContext);

  const handleDeleteFavourite = (_id) => {
    fetch(`http://localhost:3000/favourites/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const remainingMovies = movies.filter((movie) => movie._id !== _id);
        setMovies(remainingMovies);
      });
  };

  return (
    <div className="border border-gray-600 p-5 rounded-md bg-[#081718a9]">
      <figure>
        <img
          src={poster}
          className="h-52 w-full object-cover rounded-md"
          alt=""
        />
      </figure>
      <div className="space-y-2 mt-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-yellow-500">
          {title}
        </h2>
        <p className="text-gray-300 flex items-center gap-2">
          <span className="text-lg font-semibold text-white">Genre: </span>|
          {/* {genre.map((singleGenre) => (
            <p>{singleGenre} |</p>
          ))} */}
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
      <button
        onClick={() => handleDeleteFavourite(_id)}
        className="bg-red-700 w-full px-6 py-2 rounded-md text-white font-semibold text-lg mt-6 hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  );
};

export default FavoriteCard;