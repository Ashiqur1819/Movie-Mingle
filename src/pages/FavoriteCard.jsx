import { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { Rating } from "react-simple-star-rating";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const FavoriteCard = ({ movie, movies, setMovies }) => {
  const {toggle} = useContext(AuthContext)
  const { _id, poster, title, year, rating } = movie;

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
            if (data.deletedCount > 0) {
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
    <tr>
      <td></td>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={poster} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td
        className={`font-medium text-base ${
          toggle ? "text-gray-300 " : "text-gray-600"
        }`}
      >
        {title}
      </td>
      <td
        className={`font-medium text-base ${
          toggle ? "text-gray-300 " : "text-gray-600"
        }`}
      >
        {year}
      </td>
      <td>
        <Rating initialValue={rating} size={24}></Rating>
      </td>
      <th>
        <button
          onClick={() => handleDeleteFavourite(_id)}
          className="bg-red-600 p-2 rounded-sm text-gray-300"
        >
          <FaTrash></FaTrash>
        </button>
      </th>
    </tr>
  );
};

export default FavoriteCard;
