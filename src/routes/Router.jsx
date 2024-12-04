import { createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Error from "../pages/Error";
import Home from "../pages/Home";
import AllMovies from "../pages/AllMovies";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddMovie from "../pages/AddMovie";
import MyFavorites from "../pages/MyFavorites";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/all_movies",
        element: <AllMovies></AllMovies>,
      },
      {
        path: "/add_movie",
        element: <AddMovie></AddMovie>,
      },
      {
        path: "/my_favorites",
        element: <MyFavorites></MyFavorites>,
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