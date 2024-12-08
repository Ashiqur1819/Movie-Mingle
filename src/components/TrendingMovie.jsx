import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const TrendingMovie = ({movie}) => {
      const {_id, poster, title, genre, year, duration, rating, summary } = movie;
      const {toggle} = useContext(AuthContext)
    return (
      <div
        className={` rounded-lg p-6 ${
          toggle ? "border border-gray-700" : " bg-gray-200 shadow-md"
        }`}
      >
        <div>
          <img src={poster} className="rounded-lg" alt="" />
        </div>
        <div className="space-y-2">
          <h2 className="text-3xl md:text-4xl mt-4  font-bold text-red-600">
            {title}
          </h2>
          <div className="grid grid-cols-2 items-center gap-12">
            <div className="text-gray-300 flex items-center gap-2">
              <span
                className={`text-lg font-semibold ${
                  toggle ? "text-white" : "text-gray-900"
                }`}
              >
                Genre:{" "}
              </span>
              <div className="flex flex-row gap-3 mt-2">
                {genre.map((g, index) => (
                  <p key={index} className="bg-gray-600 text-yellow-500 rounded-sm font-medium px-3 py-1 text-sm">
                    {g}
                  </p>
                ))}
              </div>
            </div>
            <p className={`${toggle ? "text-gray-300" : "text-gray-600"}`}>
              <span
                className={`text-lg font-semibold ${
                  toggle ? "text-white" : "text-gray-900"
                }`}
              >
                Duration:{" "}
              </span>
              {duration} minutes
            </p>
          </div>
          <div className="grid grid-cols-2 items-center gap-12">
            <p className={`${toggle ? "text-gray-300" : "text-gray-600"}`}>
              <span
                className={`text-lg font-semibold ${
                  toggle ? "text-white" : "text-gray-900"
                }`}
              >
                Releasing Year:{" "}
              </span>
              {year}
            </p>
            <p className={`${toggle ? "text-gray-300" : "text-gray-600"}`}>
              <span
                className={`text-lg font-semibold ${
                  toggle ? "text-white" : "text-gray-900"
                }`}
              >
                Rating:{" "}
              </span>
              {rating}/5
            </p>
          </div>
          <p className={`${toggle ? "text-gray-300" : "text-gray-600"}`}>
            <span
              className={`text-lg font-semibold ${
                toggle ? "text-white" : "text-gray-900"
              }`}
            >
              Description:{" "}
            </span>
            {summary}
          </p>
        </div>
        <button className="bg-green-600 w-full px-6 py-2 rounded-md text-white font-semibold text-lg mt-6 hover:bg-green-500">
          <Link to={`/movie_details/${_id}`}>See Details</Link>
        </button>
      </div>
    );
};

export default TrendingMovie;