import s1 from "../assets/1.jpg"
import s2 from "../assets/2.jpg"
import s3 from "../assets/3.jpg"

const Slider = () => {
    return (
      <div className="carousel w-full bg-[#001D20]">
        <div
          id="slide1"
          className="carousel-item relative w-full h-[450px] md:h-[600px] bg-[#001D20]"
        >
          <img
            src={s1}
            className="w-full h-[450px] md:h-[600px] object-cover"
          />
          <div
            style={{ backgroundColor: "rgba(0, 0, 0, .3)" }}
            className="absolute  w-full h-[450px] md:h-[600px"
          >
            <div className="bg-[#001d20e0] w-[550px] shadow-lg rounded-lg border border-[#db9512] p-12 relative top-32 left-24 space-y-6">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-red-600 max-w-3xl lg:max-w-4xl">
                Dive Into the World of Movies With{" "}
                <span className="text-yellow-500">MovieMingle!</span>
              </h2>
              <p className=" text-gray-300 max-w-3xl md:max-w-xl lg:max-w-3xl">
                Immerse yourself in a community where every film finds its
                audience. Explore a vast collection of movies, share your
                thoughts, and connect with fellow movie buffs. Whether you're
                into blockbusters, indie gems, or timeless classics, MovieMingle
                is your ultimate destination to celebrate the art of cinema!
              </p>
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
          <img
            src={s2}
            className="w-full h-[450px] md:h-[600px] object-cover"
          />
          <div
            style={{ backgroundColor: "rgba(0, 0, 0, .6)" }}
            className="absolute  w-full h-[450px] md:h-[600px]"
          >
            <div className="bg-[#001d20e0] w-[550px] shadow-lg rounded-lg border border-[#db9512] p-12 relative top-24 left-24 space-y-6">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-red-600">
                From Blockbusters to Classics –{" "}
                <span className="text-yellow-500">Find Your Next Favorite!</span>
              </h2>
              <p className=" text-gray-300 max-w-3xl md:max-w-xl lg:max-w-3xl">
                MovieMingle is your guide to cinematic discovery. Explore the
                latest blockbusters, timeless classics, and hidden gems. Rate,
                review, and share your favorites while connecting with a
                passionate community of movie enthusiasts. Your next great movie
                experience starts here!
              </p>
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
          <img
            src={s3}
            className="w-full h-[450px] md:h-[600px] object-cover"
          />
          <div
            style={{ backgroundColor: "rgba(0, 0, 0, .5)" }}
            className="absolute  w-full h-[450px] md:h-[600px]"
          >
            <div className="bg-[#001d2080] w-[550px] shadow-lg rounded-lg border border-[#db9512] p-12 relative top-32 left-24  space-y-6">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-red-600">
                Rate, Review, and Rediscover{" "}
                <span className="text-yellow-500">Cinema with Us! </span>
              </h2>
              <p className=" text-gray-300 max-w-3xl md:max-w-xl lg:max-w-3xl">
                MovieMingle is the ultimate destination for movie lovers to
                explore new films, share their reviews, and connect with fellow
                cinephiles. Discover hidden gems, rate your favorites, and join
                a community that celebrates the magic of storytelling on the big
                screen!
              </p>
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