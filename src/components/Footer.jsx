import {FaFacebook, FaGithub, FaInstagramSquare, FaPinterest } from "react-icons/fa";


const Footer = () => {
    return (
      <footer className="bg-[#000b1b] mt-24">
        <div className="text-white max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-24 px-4 md:px-8 lg:px-12 p-12">
          <div>
            <h2 className="text-5xl font-bold text-red-700">MovieMingle</h2>
            <p className="mt-3 text-gray-400">
              It is a platform where movie enthusiasts connect, discover, and
              share their passion for films. Explore trending movies, read and
              write reviews, rate your favorites, and join discussions with a
              vibrant community of cinephiles. MovieMingle is your go-to hub for
              everything cinema!
            </p>
          </div>
          <div className="flex items-end flex-col justify-end">
            <h3 className="text-3xl font-bold text-yellow-600 mb-3">
              Contact Us
            </h3>
            <p className="text-gray-400">
              <span className="text-red-700 font-semibold">Email: </span>
              ashiqurrahman1819.com
            </p>
            <p className="text-gray-400">
              <span className="text-red-700 font-semibold">Phone: </span>
              +8801931536316
            </p>
            <div className="flex items-center gap-6 mt-6">
              <a
                className="text-2xl text-gray-400 hover:text-gray-300"
                href="https://www.facebook.com/Aashiq1819"
                target="_blank"
              >
                <FaFacebook></FaFacebook>
              </a>
              <a
                className="text-2xl text-gray-400 hover:text-gray-300"
                href="https://www.instagram.com/aashiq_1918/"
                target="_blank"
              >
                <FaInstagramSquare></FaInstagramSquare>
              </a>
              <a
                className="text-2xl text-gray-400 hover:text-gray-300"
                href="https://github.com/Ashiqur1819"
                target="_blank"
              >
                <FaGithub></FaGithub>
              </a>
              <a
                className="text-2xl text-gray-400 hover:text-gray-300"
                href="https://www.pinterest.com/Aashiq1819/"
                target="_blank"
              >
                <FaPinterest></FaPinterest>
              </a>
            </div>
          </div>
        </div>
            <p className="mt-3 text-gray-400 text-center">
              &copy; {new Date().getFullYear()} MovieMingle. All rights
              reserved.
            </p>
      </footer>
    );
};

export default Footer;