import { Rating } from 'react-simple-star-rating';
import Swal from 'sweetalert2';


const FavoriteCard = ({ movie, movies, setMovies }) => {
  const { _id, poster, title, genre, year, duration, rating } = movie;

  const handleDeleteFavourite = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://movie-mingle-server-side.vercel.app/favourites/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if(data.deletedCount > 0){
              Swal.fire({
                title: "Deleted!",
                text: "Your movie has been deleted.",
                icon: "success",
              });
                          const remainingMovies = movies.filter(
                            (movie) => movie._id !== _id
                          );
                          setMovies(remainingMovies);
            }

          });

      }
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
        <h2 className="text-2xl md:text-3xl font-bold text-green-500">
          {title}
        </h2>
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