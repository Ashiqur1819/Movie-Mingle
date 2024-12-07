import { createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Error from "../pages/Error";
import Home from "../pages/Home";
import AllMovies from "../pages/AllMovies";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddMovie from "../pages/AddMovie";
import MyFavorites from "../pages/MyFavorites";
import MovieDetails from "../pages/MovieDetails";
import ContactUs from "../components/ContactUs";
import PrivateRoute from "./PrivateRoute";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    loader: () => fetch("https://movie-mingle-server-side.vercel.app/movies"),
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/all_movies",
        element: <AllMovies></AllMovies>,
        loader: () =>
          fetch("https://movie-mingle-server-side.vercel.app/movies"),
      },
      {
        path: "/movie_details/:id",
        element: (
          <PrivateRoute>
            <MovieDetails></MovieDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://movie-mingle-server-side.vercel.app/movies/${params.id}`
          ),
      },
      {
        path: "/add_movie",
        element: (
          <PrivateRoute>
            <AddMovie></AddMovie>
          </PrivateRoute>
        ),
      },
      {
        path: "/my_favorites",
        element: (
          <PrivateRoute>
            <MyFavorites></MyFavorites>
          </PrivateRoute>
        ),
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default Router;