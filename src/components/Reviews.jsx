import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { RiDoubleQuotesL } from "react-icons/ri";
import { Rating } from "react-simple-star-rating";
import r1Img from "../assets/1.png"
import r2Img from "../assets/2.png"
import r3Img from "../assets/3.png"

const Reviews = () => {
    const {toggle} = useContext(AuthContext)
    return (
      <div>
        <h2
          className={`text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-500 drop-shadow-sm text-center`}
        >
          What Viewers Are Saying
        </h2>
        <div className="mt-12">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="max-w-3xl mx-auto flex flex-col items-center gap-3 text-center py-12">
                <RiDoubleQuotesL className="text-3xl text-green-600"></RiDoubleQuotesL>
                <p className={`p-3 ${toggle ? "text-gray-400" : "text-gray-600"}`}>
                  I had an amazing experience browsing this website! The layout
                  is clean and modern, and everything is easy to find. The movie
                  recommendations are spot on, and I love how fast the site
                  loads. I also appreciated the filter options to find movies by
                  genre and rating. It’s a perfect site for movie lovers like me
                  who want quick access to the best films. Keep up the great
                  work!
                </p>
                <Rating initialValue={5}></Rating>
                <div className="flex items-center gap-3">
                  <img src={r1Img} className="w-16" alt="" />
                  <div>
                    <h3
                      className={`text-lg font-semibold ${
                        toggle ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Alex Johnson
                    </h3>
                    <p
                      className={`text-sm ${
                        toggle ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      New York, USA
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="max-w-3xl mx-auto flex flex-col items-center gap-3 text-center py-12">
                <RiDoubleQuotesL className="text-3xl text-green-600"></RiDoubleQuotesL>
                <p className={`p-3 ${toggle ? "text-gray-400" : "text-gray-600"}`}>
                  I’ve been using this site for a while now, and I love the
                  curated movie lists. The reviews and ratings from other users
                  are very helpful, and I can easily add movies to my watchlist.
                  However, I think it would be great to have a personalized
                  recommendation engine based on my viewing history. Overall, a
                  fantastic website that just needs a few extra features to make
                  it perfect!
                </p>
                <Rating initialValue={5}></Rating>
                <div className="flex items-center gap-3">
                  <img src={r2Img} className="w-16" alt="" />
                  <div>
                    <h3
                      className={`text-lg font-semibold ${
                        toggle ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Michael Brown
                    </h3>
                    <p
                      className={`text-sm ${
                        toggle ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Paris, Franch
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="max-w-3xl mx-auto flex flex-col items-center gap-3 text-center py-12">
                <RiDoubleQuotesL className="text-3xl text-green-600"></RiDoubleQuotesL>
                <p className={`p-3 ${toggle ? "text-gray-400" : "text-gray-600"}`}>
                  This website has completely changed the way I discover movies!
                  The interface is smooth, and the content is always up-to-date.
                  I love how I can quickly check out trailers, cast info, and
                  ratings without navigating away from the page. The mobile
                  experience is just as good as the desktop version, which is a
                  huge plus. Definitely bookmarking this site for all my
                  movie-related needs.
                </p>
                <Rating initialValue={5}></Rating>
                <div className="flex items-center gap-3">
                  <img src={r3Img} className="w-16" alt="" />
                  <div>
                    <h3
                      className={`text-lg font-semibold ${
                        toggle ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Sarah Lee
                    </h3>
                    <p
                      className={`text-sm ${
                        toggle ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      London, England
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    );
};

export default Reviews;