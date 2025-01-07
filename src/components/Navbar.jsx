import { useContext } from "react";
import {  NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { IoMoon, IoSunnyOutline } from "react-icons/io5";


const Navbar = () => {
  const { user, logOut, toggle, setToggle, handleToggle } =
    useContext(AuthContext);


  const links = (
    <div className="lg:flex items-center gap-8 ">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/all_movies">All Movies</NavLink>
      </li>
      {user?.email && (
        <li>
          <NavLink to="/add_movie">Add Movie</NavLink>
        </li>
      )}
      {user?.email && (
        <li>
          <NavLink to="/my_favorites">My Favorites</NavLink>
        </li>
      )}
      <li>
        <NavLink to="/about">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
      <button
        type="button"
        onClick={() => handleToggle(setToggle(!toggle))}
        className={`text-sm border-2 border-yellow-500 p-2 rounded-full ml-4 mt-2 lg:mt-0 ${
          toggle ? "bg-black" : "bg-white"
        }`}
      >
        {toggle ? (
          <IoSunnyOutline className="text-white-500" />
        ) : (
          <IoMoon className="text-black" />
        )}
      </button>
    </div>
  );

  

  return (
    <div
      className={`navbar px-3 md:px-5 lg:px-6 py-4 ${
        toggle ? "bg-[#000e0f]" : "bg-gray-200"
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="lg:hidden mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-7 w-7 ${toggle ? "text-white" : "text-black"}`}
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
            className={`menu menu-sm  dropdown-content bg-[#000e0f] rounded-box z-[1] mt-6 w-60 p-3 shadow ${
              toggle ? "text-gray-300 bg-[#000e0f]" : "text-gray-700 bg-white"
            }`}
          >
            {links}
          </ul>
        </div>
        <a className="text-xl text-red-600 md:text-3xl font-bold md:inline-block">
          Movie<span className="text-yellow-500">Mingle</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul
          className={`menu-horizontal flex text-base  text-gray-300 ${
            toggle ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {links}
        </ul>
      </div>
      <div className="navbar-end gap-6">
        {user ? (
          <div className="flex items-center gap-5">
            <div
              className="tooltip tooltip-bottom"
              data-tip={user?.displayName}
            >
              <img
                className="w-8 md:w-10 rounded-full cursor-pointer"
                src={user?.photoURL}
                alt=""
              />
            </div>
            <button>
              <NavLink
                onClick={logOut}
                to="/"
                className="py-2 px-6 text-sm rounded-lg bg-red-700 text-white cursor-pointer font-semibold hover:bg-red-600"
              >
                Log Out
              </NavLink>
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-3 md:gap-6">
            <button className="bg-green-600 px-3 md:px-6 py-2 rounded-md text-white font-semibold text-sm  hover:bg-green-500">
              <NavLink to="/login">Log In</NavLink>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
