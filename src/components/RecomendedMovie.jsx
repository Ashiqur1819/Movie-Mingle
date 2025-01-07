import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Rating } from "react-simple-star-rating";


const RecomendedMovie = ({movie}) => {
     const { _id, poster, title, genre, rating, summary } =
       movie;
       const {toggle} = useContext(AuthContext)
     return (
       <div
         className={` rounded-lg flex flex-col justify-between p-3 transition-all hover:-translate-y-2 duration-300 ${
           !toggle
             ? "bg-white border border-white shadow-sm"
             : "border border-gray-700"
         }`}
       >
         <div>
           <img src={poster} className="rounded-lg h-52 object-cover" alt="" />
         </div>
         <div className="space-y-2">
           <h2 className="text-xl mt-4  font-bold text-red-600">{title}</h2>
         </div>
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
         <p>
           <Rating initialValue={rating}></Rating>
         </p>
         <button className="bg-green-600 w-full px-6 py-1 rounded-md text-white font-semibold mt-3 hover:bg-green-500">
           <Link to={`/movie_details/${_id}`}>See Details</Link>
         </button>
       </div>
     );
};

export default RecomendedMovie;