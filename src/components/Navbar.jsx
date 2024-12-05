import { NavLink } from "react-router-dom";


const Navbar = () => {

  const links = (
    <div className="lg:flex items-center gap-6">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/all_movies">All Movies</NavLink>
      </li>
      <li>
        <NavLink to="/add_movie">Add Movie</NavLink>
      </li>
      <li>
        <NavLink to="/my_favorites">My Favorites</NavLink>
      </li>
    </div>
  );

  return (
    <div className="navbar px-4 md:px-8 lg:px-12 py-6 bg-[#001D20]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="lg:hidden mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-md dropdown-content bg-gray-900 rounded-box z-[1] mt-6 w-60 p-2 shadow text-white"
          >
            {links}
          </ul>
        </div>
        <a className="text-lg text-red-600 md:text-3xl font-bold hidden md:inline-block">
          Movie<span className="text-yellow-500">Mingle</span>
        </a>
        {/* <img src={logo} className="w-16 md:hidden" alt="" /> */}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px- gap-6 text-base text-gray-400">
          {links}
        </ul>
      </div>
      <div className="navbar-end gap-6">
        <button className="bg-green-600 px-6 py-2 rounded-md text-white font-semibold text-lg hover:bg-green-500">
          <NavLink to="/login">Log In</NavLink>
        </button>
        <button className="bg-yellow-600 px-6 py-2 rounded-md text-white font-semibold text-lg hover:bg-amber-500">
          <NavLink to="/register">Register</NavLink>
        </button>
      </div>
    </div>
  );
};
export default Navbar;