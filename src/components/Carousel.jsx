import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import s1 from "../assets/1.jpg";
import s2 from "../assets/2.jpg";
import s3 from "../assets/3.jpg";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from "react-router-dom";


const Carousel = () => {
  return (
    <div className="relative z-0">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="h-[450px] md:h-[550px] flex items-center"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(${s1})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="bg-[#00000015] w-full h-full shadow-lg rounded-lg p-6 md:p-12 lg:p-24 md:pt-24  space-y-6">
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
              <p className=" text-gray-300 max-w-3xl md:max-w-xl lg:max-w-2xl">
                A powerful leader embarks on a mission to honor a promise made
                to a dying friend while battling powerful adversaries.
              </p>
              <button className="bg-green-600 px-6 py-2 rounded-sm text-white font-semibold md:text-lg mt-6 hover:bg-green-500">
                <Link to={`/all_movies`}>Explore All Movies</Link>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-[450px] md:h-[550px] flex items-center"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)), url(${s2})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="bg-[#00000015] w-full h-full shadow-lg rounded-lg p-6 md:p-12 lg:p-24 md:pt-24  space-y-6">
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
              <button className="bg-green-600 px-6 py-2 rounded-sm text-white font-semibold md:text-lg mt-6 hover:bg-green-500">
                <Link to={`/all_movies`}>Explore All Movies</Link>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-[450px] md:h-[550px] flex items-center"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(${s3})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="bg-[#00000015] w-full h-full shadow-lg rounded-lg p-6 md:p-12 lg:p-24 md:pt-24  space-y-6">
              <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-red-600 max-w-3xl lg:max-w-4xl uppercase">
                K.G.F: C h a p t e r - 2
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
              <button className="bg-green-600  px-6 py-2 rounded-sm text-white font-semibold md:text-lg mt-6 hover:bg-green-500">
                <Link to={`/all_movies`}>Explore All Movies</Link>
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
