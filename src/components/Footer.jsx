import { useContext } from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagramSquare,
  FaPinterest,
} from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import logo from "../../public/assets/logo.png"

const Footer = () => {
  const {toggle} = useContext(AuthContext)
  return (
    <footer className={` mt-24 ${toggle ? "bg-[#000e0f]" : "bg-gray-200"}`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-24 px-3 md:px-5 lg:px-6 p-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <img src={logo} className="w-16 md:w-24" alt="" />
            <h2 className="text-4xl lg:text-5xl font-bold text-red-600">
              Movie
              <span className={`text-yellow-500`}>Mingle</span>
            </h2>
          </div>
          <p
            className={`mt-3 text-justify  ${
              toggle ? "text-gray-400" : "text-gray-600"
            }`}
          >
            MovieMingle is a platform where film enthusiasts can connect,
            discover, and share their passion for movies. Explore trending
            films, read and write reviews, rate your favorites, and engage in
            discussions with a vibrant community of cinephiles. MovieMingle is
            your go-to hub for all things cinema!
          </p>
        </div>
        <div>
          <h2 className={`text-3xl font-bold mb-3 text-yellow-500`}>
            Quick Links
          </h2>
          <nav
            className={`flex flex-col gap-3 ${
              toggle ? "text-gray-400" : "text-gray-600"
            }`}
          >
            <Link className="hover:underline" to="/">
              Home
            </Link>
            <Link className="hover:underline" to="all_movies">
              All Movies
            </Link>
            <Link className="hover:underline" to="about">
              About Us
            </Link>
            <Link className="hover:underline" to="contact">
              Contact Us
            </Link>
          </nav>
        </div>
        <div className="flex flex-col ">
          <h3 className={`text-3xl font-bold mb-3 text-yellow-500`}>
            Contact Us
          </h3>
          <p className={`${toggle ? "text-gray-400" : "text-gray-600"}`}>
            <span className="text-green-600 font-semibold">Email: </span>
            ashiqurrahman1819.com
          </p>
          <p className={`${toggle ? "text-gray-400" : "text-gray-600"}`}>
            <span className="text-green-600 font-semibold">Phone: </span>
            +8801931536316
          </p>
          <div className="flex items-center gap-6 mt-6">
            <a
              className="text-2xl text-gray-500 hover:text-gray-400"
              href="https://www.facebook.com/Aashiq1819"
              target="_blank"
            >
              <FaFacebook></FaFacebook>
            </a>
            <a
              className="text-2xl text-gray-500 hover:text-gray-400"
              href="https://www.instagram.com/aashiq_1918/"
              target="_blank"
            >
              <FaInstagramSquare></FaInstagramSquare>
            </a>
            <a
              className="text-2xl text-gray-500 hover:text-gray-400"
              href="https://github.com/Ashiqur1819"
              target="_blank"
            >
              <FaGithub></FaGithub>
            </a>
            <a
              className="text-2xl text-gray-500 hover:text-gray-400"
              href="https://www.pinterest.com/Aashiq1819/"
              target="_blank"
            >
              <FaPinterest></FaPinterest>
            </a>
          </div>
        </div>
      </div>
      <p className="mt-3 text-gray-500 text-center">
        &copy; {new Date().getFullYear()} MovieMingle. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
