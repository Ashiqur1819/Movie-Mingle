import { Link } from "react-router-dom";
import s1 from "../assets/1.jpg";
import s2 from "../assets/2.jpg";
import s3 from "../assets/3.jpg";

const Slider = () => {
  return (
    <div className="carousel w-full bg-[#001D20]">
      <div
        id="slide1"
        className="carousel-item relative w-full h-96 md:h-[600px] bg-[#001D20]"
      >
        <img src={s1} className="w-full h-96 md:h-[600px] object-cover " />
        <div
          style={{ backgroundColor: "rgba(0, 0, 0, .5)" }}
          className="absolute  w-full h-[450px] md:h-[600px]"
        >
          <div className="bg-[#00000015] w-full  md:w-[550px] shadow-lg rounded-lg  px-4 py-12 md:p-8 lg:p-12 relative md:top-32 md:left-24 space-y-6">
            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-red-600 max-w-3xl lg:max-w-4xl uppercase">
              S a l a a r
            </h2>
            <div className="text-white flex items-center gap-3">
              <p className="bg-yellow-600 px-4 py-2 rounded-sm">Action</p>
              <p className="bg-yellow-600 px-4 py-2 rounded-sm">Thriller</p>
            </div>
            <div className="md:flex gap-6">
              <p className="text-lg font-semibold text-green-600">
                Duration:{" "}
                <span className="text-base font-normal text-yellow-500">
                  158 minutes
                </span>
              </p>
              <p className="text-lg font-semibold text-green-600">
                Release:{" "}
                <span className="text-base font-normal text-yellow-500">
                  2023
                </span>
              </p>
              <p className="text-lg font-semibold text-green-600">
                Rating:{" "}
                <span className="text-base font-normal text-yellow-500">
                  5/5
                </span>
              </p>
            </div>
            <p className=" text-gray-300 max-w-3xl md:max-w-xl lg:max-w-3xl">
              A powerful leader embarks on a mission to honor a promise made to
              a dying friend while battling powerful adversaries.
            </p>
            <button className="bg-green-600 w-full px-6 py-2 rounded-sm text-white font-semibold text-lg mt-6 hover:bg-green-500">
              <Link to={`/all_movies`}>Explore All Movies</Link>
            </button>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between px-6">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide2"
        className="carousel-item relative w-full  h-[450px] md:h-[600px]"
      >
        <img src={s2} className="w-full h-[450px] md:h-[600px] object-cover" />
        <div
          style={{ backgroundColor: "rgba(0, 0, 0, .8)" }}
          className="absolute  w-full h-[450px] md:h-[600px]"
        >
          <div className="bg-[#00000011] w-full  md:w-[550px] shadow-lg rounded-lg  px-4 py-12 md:p-8 lg:p-12 relative md:top-32 md:left-24 space-y-6">
            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-red-600 max-w-3xl lg:max-w-4xl uppercase">
              P a t h a n
            </h2>
            <div className="text-white flex items-center gap-3">
              <p className="bg-yellow-600 px-4 py-2 rounded-sm">Action</p>
              <p className="bg-yellow-600 px-4 py-2 rounded-sm">Spy</p>
            </div>
            <div className="md:flex gap-6">
              <p className="text-lg font-semibold text-green-600">
                Duration:{" "}
                <span className="text-base font-normal text-yellow-500">
                  146 minutes
                </span>
              </p>
              <p className="text-lg font-semibold text-green-600">
                Release:{" "}
                <span className="text-base font-normal text-yellow-500">
                  2023
                </span>
              </p>
              <p className="text-lg font-semibold text-green-600">
                Rating:{" "}
                <span className="text-base font-normal text-yellow-500">
                  5/5
                </span>
              </p>
            </div>
            <p className=" text-gray-300 max-w-3xl md:max-w-xl lg:max-w-3xl">
              A spy returns from exile to prevent a major terrorist attack
              threatening India's security.
            </p>
            <button className="bg-green-600 w-full px-6 py-2 rounded-sm text-white font-semibold text-lg mt-6 hover:bg-green-500">
              <Link to={`/all_movies`}>Explore All Movies</Link>
            </button>
          </div>
        </div>

        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between px-6">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide3"
        className="carousel-item relative w-full h-[450px] md:h-[600px]"
      >
        <img src={s3} className="w-full h-[450px] md:h-[600px] object-cover" />
        <div
          style={{ backgroundColor: "rgba(0, 0, 0, .7)" }}
          className="absolute  w-full h-[450px] md:h-[600px]"
        >
          <div className="bg-[#00000007] w-full  md:w-[550px]  shadow-lg rounded-lg  px-4 py-12 md:p-8 lg:p-12 relative md:top-32 md:left-24 space-y-6">
            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-red-600 max-w-3xl lg:max-w-4xl uppercase">
              K.G.F: C h a p t e r 2
            </h2>
            <div className="text-white flex items-center gap-3">
              <p className="bg-yellow-600 px-4 py-2 rounded-sm">Action</p>
              <p className="bg-yellow-600 px-4 py-2 rounded-sm">Drama</p>
            </div>
            <div className="md:flex items-start gap-6">
              <p className="text-lg font-semibold text-green-600">
                Duration:{" "}
                <span className="text-base font-normal text-yellow-500">
                  168 minutes
                </span>
              </p>
              <p className="text-lg font-semibold text-green-600">
                Release:{" "}
                <span className="text-base font-normal text-yellow-500">
                  2022
                </span>
              </p>
              <p className="text-lg font-semibold text-green-600">
                Rating:{" "}
                <span className="text-base font-normal text-yellow-500">
                  5/5
                </span>
              </p>
            </div>
            <p className=" text-gray-300 max-w-3xl md:max-w-xl lg:max-w-3xl">
              Rocky takes control of the Kolar Gold Fields but faces powerful
              adversaries.
            </p>
            <button className="bg-green-600 w-full px-6 py-2 rounded-sm text-white font-semibold text-lg mt-6 hover:bg-green-500">
              <Link to={`/all_movies`}>Explore All Movies</Link>
            </button>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between px-6">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slider;
