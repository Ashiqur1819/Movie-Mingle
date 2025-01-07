import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const AboutUs = () => {
  const {toggle} = useContext(AuthContext)
    return (
      <div className="px-3 md:px-5 lg:px-6 mt-20">
        <h2
          className={`text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-500 drop-shadow-sm text-center`}
        >
          About Us
        </h2>
        <div className="max-w-3xl mx-auto text-gray-300 text-justify mt-12">
          <p className={`${toggle ? "text-gray-400" : "text-gray-600"}`}>
            Welcome to MovieMingle – your ultimate destination for exploring the
            captivating world of movies! At MovieMingle, we believe that movies
            are more than just entertainment; they’re a gateway to emotions,
            stories, and unforgettable experiences. Our platform is designed to
            connect movie enthusiasts from around the globe, offering a space
            where you can discover, discuss, and dive into the world of cinema.
          </p>
          <h3 className="text-2xl font-bold text-red-600 mt-6">
            What We Offer:
          </h3>
          <ul className="list-disc ml-12">
            <li
              className={`text-lg font-semibold ${
                toggle ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Comprehensive Movie Database:
              <span
                className={`text-base font-normal ml-2 ${
                  toggle ? "text-gray-400" : "text-gray-600"
                }`}
              >
                From timeless classics to the latest blockbusters, find detailed
                information about your favorite movies.
              </span>
            </li>
            <li
              className={`text-lg font-semibold ${
                toggle ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Personalized Recommendations:
              <span
                className={`text-base font-normal ml-2 ${
                  toggle ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Let us help you find your next movie obsession based on your
                unique taste.
              </span>
            </li>
            <li
              className={`text-lg font-semibold ${
                toggle ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Community Connection:
              <span
                className={`text-base font-normal ml-2 ${
                  toggle ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Engage with fellow movie lovers by sharing reviews, ratings, and
                opinions.
              </span>
            </li>
            <li
              className={`text-lg font-semibold ${
                toggle ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Up-to-Date News:
              <span
                className={`text-base font-normal ml-2 ${
                  toggle ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Stay informed about upcoming releases, industry news, and more.
              </span>
            </li>
          </ul>
          <p className={`mt-6 ${toggle ? "text-gray-400" : "text-gray-600"}`}>
            Whether you’re a casual viewer or a dedicated cinephile, MovieMingle
            is here to enhance your movie experience. Join us on this cinematic
            journey and discover how movies bring people together!
          </p>
        </div>
      </div>
    );
};

export default AboutUs;