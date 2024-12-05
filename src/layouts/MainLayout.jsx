import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";
  import { toast, ToastContainer} from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
import { createContext, useState } from "react";

 export const FavoriteContext = createContext()

const MainLayout = () => {
  const loadedMovies = useLoaderData()
  const [movies, setMovies] = useState([]);

  const handleAddToFavourite = (_id) => {
    console.log(_id)
    const favoriteMovie = [...loadedMovies].find((movie) => movie._id === _id); ;
    console.log(favoriteMovie);

      if(!movies.includes(favoriteMovie)){
        const updateFavoriteMovies = [...movies, favoriteMovie];
        setMovies(updateFavoriteMovies);
        return toast.success(`${favoriteMovie.title} successfully added to my favourite list!`);
      }
      else{
        return toast.error(`${favoriteMovie.title} Already added!`)
      }

    }
  

  const favoriteMovies = {
    movies,
    setMovies,
    handleAddToFavourite,
  };
    return (
      <FavoriteContext.Provider value={favoriteMovies}>
        <div className="bg-[#001D20] max-w-7xl mx-auto">
          <header>
            <Navbar></Navbar>
          </header>
          <main>
            <Outlet></Outlet>
          </main>
          <ToastContainer></ToastContainer>
        </div>
      </FavoriteContext.Provider>
    );
};

export default MainLayout;