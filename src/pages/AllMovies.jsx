import { useLoaderData } from "react-router-dom";
import Movie from "../components/Movie";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const AllMovies = () => {
  const movies = useLoaderData();
  console.log(movies);
  const { toggle } = useContext(AuthContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const sortedMovies = [...filteredMovies].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1; // Ascending order
    } else {
      return a.title.toLowerCase() < b.title.toLowerCase() ? 1 : -1; // Descending order
    }
  });

  return (
    <div className="px-4 md:px-8 lg:px-12 mt-20">
      <div className="md:flex items-center gap-6">
        <label
          className={`input mt-3 input-bordered flex items-center gap-2 rounded-md text-white  ${
            toggle
              ? "bg-[#000e0f] border border-gray-600 "
              : "bg-white border border-gray-300 text-gray-600"
          }`}
        >
          <input
            type="text"
            placeholder="Search by Title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`grow ${toggle ? "text-gray-400" : "text-gray-600"}`}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className={`h-6 w-6 text-gray-500`}
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        <label
          className={`form-control mt-3 rounded-lg ${
            toggle ? "border border-gray-500" : "border border-gray-100"
          }`}
        >
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className={`select select-bordered bg-[#000e0f] text-gray-400 text-base ${
              toggle ? "bg-[#000e0f]" : "bg-white text-gray-600"
            }`}
          >
            <option value={"asc"}>Acsending Order</option>
            <option value={"dsc"}>Decsending Order</option>
          </select>
        </label>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 mt-8">
        {sortedMovies.map((movie) => (
          <Movie movie={movie} key={movie._id}></Movie>
        ))}
      </div>
    </div>
  );
};

export default AllMovies;
