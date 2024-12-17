import { useContext } from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagramSquare,
  FaPinterest,
} from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";

const Footer = () => {
  const {toggle} = useContext(AuthContext)
  return (
    <footer className={` mt-24 ${toggle ? "bg-[#000b1b]" : "bg-gray-100"}`}>
      <div className="text-white max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12 lg:gap-24 px-4 md:px-8 lg:px-12 p-12">
        <div>
          <h2 className="text-5xl font-bold text-red-600">
            Movie
            <span
              className={`${toggle ? "text-yellow-500" : "text-yellow-600"}`}
            >
              Mingle
            </span>
          </h2>
          <p className="mt-3 text-gray-500">
            MovieMingle is a platform where film enthusiasts can connect,
            discover, and share their passion for movies. Explore trending
            films, read and write reviews, rate your favorites, and engage in
            discussions with a vibrant community of cinephiles. MovieMingle is
            your go-to hub for all things cinema!
          </p>
        </div>
        <div className="flex md:items-end flex-col justify-end">
          <h3
            className={`text-3xl font-bold mb-3 ${
              toggle ? "text-yellow-500" : "text-yellow-600"
            }`}
          >
            Contact Us
          </h3>
          <p className="text-gray-500">
            <span className="text-green-600 font-semibold">Email: </span>
            ashiqurrahman1819.com
          </p>
          <p className="text-gray-500">
            <span className="text-green-600 font-semibold">Phone: </span>
            +8801931536316
          </p>
          <div className="flex items-center gap-6 mt-6">
            <a
              className="text-2xl text-gray-500 hover:text-gray-300"
              href="https://www.facebook.com/Aashiq1819"
              target="_blank"
            >
              <FaFacebook></FaFacebook>
            </a>
            <a
              className="text-2xl text-gray-500 hover:text-gray-300"
              href="https://www.instagram.com/aashiq_1918/"
              target="_blank"
            >
              <FaInstagramSquare></FaInstagramSquare>
            </a>
            <a
              className="text-2xl text-gray-500 hover:text-gray-300"
              href="https://github.com/Ashiqur1819"
              target="_blank"
            >
              <FaGithub></FaGithub>
            </a>
            <a
              className="text-2xl text-gray-500 hover:text-gray-300"
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
