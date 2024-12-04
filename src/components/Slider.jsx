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
          <div className="absolute  w-full h-[450px] md:h-[600px">
            <div className="bg-[#001d20e0] w-[550px] shadow-lg rounded-lg border border-[#db9512] p-12 relative top-32 left-24 space-y-12">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#E50914] max-w-3xl lg:max-w-4xl">
                Breathtaking Views, <br />
                <span className="text-[#db9512]">Unforgettable Journeys </span>
              </h2>
              <p className=" text-white max-w-3xl md:max-w-xl lg:max-w-3xl">
                Experience awe-inspiring landscapes and life-changing adventures
                that create lasting memories. From towering mountains to serene
                beaches and vibrant cityscapes, every journey invites you to
                discover the world in its most magnificent form.
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
            <div className="bg-[#001d20e0] w-[550px] shadow-lg rounded-lg border border-[#db9512] p-12 relative top-24 left-24 space-y-12">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#E50914]">
                Breathtaking Views, <br />
                <span className="text-[#db9512]">Unforgettable Journeys</span>
              </h2>
              <p className=" text-white max-w-3xl md:max-w-xl lg:max-w-3xl">
                Experience awe-inspiring landscapes and life-changing adventures
                that create lasting memories. From towering mountains to serene
                beaches and vibrant cityscapes, every journey invites you to
                discover the world in its most magnificent form.
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
            <div className="bg-[#001d2080] w-[550px] shadow-lg rounded-lg border border-[#db9512] p-12 relative top-32 left-24  space-y-12">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#E50914]">
                Breathtaking Views, <br />
                <span className="text-[#db9512]">Unforgettable Journeys</span>
              </h2>
              <p className=" text-white max-w-3xl md:max-w-xl lg:max-w-3xl">
                Experience awe-inspiring landscapes and life-changing adventures
                that create lasting memories. From towering mountains to serene
                beaches and vibrant cityscapes, every journey invites you to
                discover the world in its most magnificent form.
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