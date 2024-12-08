import { Link } from "react-router-dom";


const RecomendedMovie = ({movie}) => {
     const { _id, poster, title, genre, year, duration, rating, summary } =
       movie;
     return (
       <div className="border border-gray-700 rounded-lg flex flex-col justify-between p-3">
         <div>
           <img src={poster} className="rounded-lg h-60 object-cover" alt="" />
         </div>
         <div className="space-y-2">
           <h2 className="text-xl md:text-2xl mt-4  font-bold text-red-600">
             {title}
           </h2>
         </div>
         <div className="flex flex-row gap-3 mt-2">
           {genre.map((g) => (
             <p className="bg-gray-600 text-yellow-500 rounded-sm font-medium px-3 py-1 text-sm">
               {g}
             </p>
           ))}
         </div>
         <button className="bg-green-600 w-full px-6 py-2 rounded-md text-white font-semibold text-lg mt-6 hover:bg-green-500">
           <Link to={`/movie_details/${_id}`}>See Details</Link>
         </button>
       </div>
     );
};

export default RecomendedMovie;