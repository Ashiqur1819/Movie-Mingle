import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createContext, useContext, useState } from "react";
import Footer from "../components/Footer";
import { AuthContext } from "../provider/AuthProvider";

export const FavoriteContext = createContext();

const MainLayout = () => {
  const loadedMovies = useLoaderData();
  const [movies, setMovies] = useState([]);
  const {toggle, setToggle} = useContext(AuthContext)
  const {user} = useContext(AuthContext)

  const handleAddToFavourite = (_id) => {

    const favoriteMovie = [...loadedMovies].find((movie) => movie._id === _id);

    if (!movies.includes(favoriteMovie)) {
      const updateFavoriteMovies = [...movies, favoriteMovie];
      setMovies(updateFavoriteMovies);
      const {_id, ...rest}= favoriteMovie 

      // Send favorite movie data client side to server side
      fetch("http://localhost:3000/favourites", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({...rest, userEmail: user.email}),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            return toast.success(
              `${favoriteMovie.title} successfully added to my favourite list!`
            );
          }
        });
    } else {
      return toast.error(`${favoriteMovie.title} Already added!`);
    }
  };

  const favoriteMovies = {
    movies,
    setMovies,
    handleAddToFavourite,
  };
  return (
    <FavoriteContext.Provider value={favoriteMovies}>
      <div className={`max-w-7xl mx-auto ${toggle ? 'bg-[#001D20]' : "bg-white"}`}>
        <header>
          <Navbar></Navbar>
        </header>
        <main>
          <Outlet></Outlet>
        </main>
        <footer>
          <Footer></Footer>
        </footer>
        <ToastContainer></ToastContainer>
      </div>
    </FavoriteContext.Provider>
  );
};

export default MainLayout;
