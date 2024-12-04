import React from 'react';
import { FaTrash } from 'react-icons/fa';

const FavoriteCard = ({movie, index}) => {
    const { poster, title, genre, year, duration, rating } = movie;
    return (
      <div className="p-6 border mb-6 rounded-md">
        <div className="flex items-center justify-around">
            <p>{index + 1}</p>
          <figure>
            <img
              src={poster}
              className="w-24 h-24 object-cover rounded-full"
              alt=""
            />
          </figure>
          <div className="text-center">
            <p>
              <strong>Name</strong>
            </p>
            <p>{title}</p>
          </div>
          <div className="text-center">
            <p>
              <strong>Genre</strong>
            </p>
            <p>{genre}</p>
          </div>
          <div className="text-center">
            <p>
              <strong>Duration</strong>
            </p>
            <p>{duration} minutes</p>
          </div>
          <div className="text-center">
            <p>
              <strong>Release Year</strong>
            </p>
            <p>{year}</p>
          </div>
          <div className="text-center">
            <p>
              <strong>Rating</strong>
            </p>
            <p>{rating}</p>
          </div>

          <button className="flex items-center gap-2 font-semibold text-lg text-red-600 px-5 py-2 bg-white rounded-md hover:bg-red-600 hover:text-white">
            Delete
            <FaTrash />
          </button>
        </div>
      </div>
    );
};

export default FavoriteCard;