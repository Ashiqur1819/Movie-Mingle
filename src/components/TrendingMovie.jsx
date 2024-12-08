import React from 'react';

const TrendingMovie = ({movie}) => {
      const {poster, title, genre, year, duration, rating, summary } = movie;
    return (
      <div className="border border-gray-700 rounded-lg p-6">
        <div>
          <img src={poster} className="rounded-lg" alt="" />
        </div>
        <div className="space-y-2">
          <h2 className="text-3xl md:text-4xl mt-4  font-bold text-red-600">
            {title}
          </h2>
          <div className="grid grid-cols-2 items-center gap-12">
            <div className="text-gray-300 flex items-center gap-2">
              <span className="text-lg font-semibold text-white">Genre: </span>
              <div className='flex flex-row gap-3 mt-2'>
                {genre.map((g) => (
                  <p className='bg-gray-600 text-yellow-500 rounded-sm font-medium px-3 py-1 text-sm'>{g}</p>
                ))}
              </div>
            </div>
            <p className="text-gray-300">
              <span className="text-lg font-semibold text-white">
                Duration:{" "}
              </span>
              {duration} minutes
            </p>
          </div>
          <div className="grid grid-cols-2 items-center gap-12">
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
          </div>
          <p className="text-gray-300">
            <span className="text-lg font-semibold text-white">
              Description:{" "}
            </span>
            {summary}
          </p>
        </div>
      </div>
    );
};

export default TrendingMovie;