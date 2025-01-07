import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const TrendingMovie = ({movie}) => {
      const {_id, poster, title, genre, year, duration, rating, summary } = movie;
      const {toggle} = useContext(AuthContext)
    return (
      <div className={` ${toggle ? "border border-gray-700" : " bg-white"}`}>
        <div>
          <img src={poster} alt="" />
        </div>
        <div className="space-y-2 p-6">
          <h2 className="text-3xl md:text-4xl mt-4  font-bold text-red-600">
            {title}
          </h2>
          <div className="grid md:grid-cols-2 items-center md:gap-12">
            <div className="text-gray-300 flex items-center gap-2">
              <span
                className={`text-lg font-semibold ${
                  toggle ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Genre:{" "}
              </span>
              <div className="flex flex-row gap-3 mt-2">
                {genre.map((g, index) => (
                  <p
                    key={index}
                    className="bg-gray-600 text-yellow-500 rounded-sm font-medium px-3 py-1 text-sm"
                  >
                    {g}
                  </p>
                ))}
              </div>
            </div>
            <p className={`${toggle ? "text-gray-300" : "text-gray-600"} mt-2`}>
              <span
                className={`text-lg font-semibold ${
                  toggle ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Duration:{" "}
              </span>
              {duration} minutes
            </p>
          </div>
          <div className="grid md:grid-cols-2 items-center md:gap-12">
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
              {rating}/5
            </p>
          </div>
          <p className={`${toggle ? "text-gray-400" : "text-gray-600"}`}>
            <span
              className={`text-lg font-semibold ${
                toggle ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Description:{" "}
            </span>
            {summary.substring(0, 250)}...
          </p>
        </div>
        <div className='p-6'>
          <button className="bg-green-600 w-full md:w-fit px-6 py-2 text-white font-semibold text-base hover:bg-green-500">
            <Link to={`/movie_details/${_id}`}>See Details</Link>
          </button>
        </div>
      </div>
    );
};

export default TrendingMovie;