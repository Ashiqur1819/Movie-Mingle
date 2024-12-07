import { useLoaderData } from "react-router-dom";
import Movie from "../components/Movie";

const AllMovies = () => {
  const movies = useLoaderData();

  return (
    <div className="px-4 md:px-8 lg:px-12">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {movies.map((movie) => (
          <Movie movie={movie} key={movie._id}></Movie>
        ))}
      </div>
    </div>
  );
};

export default AllMovies;
