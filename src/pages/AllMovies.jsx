import { useLoaderData } from "react-router-dom";
import Movie from "../components/Movie";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const AllMovies = () => {
  const movies = useLoaderData()
  const [searchItem, setSearchItem] = useState("");
  const {toggle} = useContext(AuthContext)

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <div className="px-4 md:px-8 lg:px-12 mt-8">
      <label
        className={`input input-bordered flex items-center gap-2 rounded-md text-white border border-gray-600 ${
          toggle ? "bg-[#1D232A] " : "bg-white border-gray-100 text-gray-600"
        }`}
      >
        <input
          type="text"
          placeholder="Search by Title..."
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          className="grow"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-6 w-6 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filteredMovies.map((movie) => (
          <Movie movie={movie} key={movie._id}></Movie>
        ))}
      </div>
    </div>
  );
};

export default AllMovies;
