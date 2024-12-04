import { toast } from "react-toastify";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Rating } from "react-simple-star-rating";

const AddMovie = () => {

 const [startDate, setStartDate] = useState(new Date());
 const [rating, setRating] = useState(0);

  const handleAddMovie = e => {
    e.preventDefault()
    const form = e.target;
    const poster = form.poster.value;
    if (!poster.startsWith("http")){
     return toast.error("Poster must be a valid URL.");
    } 

    const title = form.title.value;
    if(title.length < 2){
       return toast.error("Title must be at least 2 characters.");
    }

    const genre = form.genre.value;

    if(!startDate){
      return toast.error("Release year is required.");
    }
    const year = startDate.getFullYear()

    const duration = form.duration.value;
    if(duration <= 60){
      return toast.error("Duration must be greater than 60 minutes.");
    }

    if (!rating) {
      return toast.error("dfdf");
    }
    

    const summary = form.summary.value;
    if(summary.length < 10){
      return toast.error("Summary must be at least 10 characters long.");
    }


    const newMovie = { poster, title, genre, year, duration, rating, summary };
    
    // Send data from client side to server side
    fetch("http://localhost:3000/movies", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newMovie),
    })
      .then((res) => res.json())
      .then((data) => {
        // data.acknowledged
        form.reset();
        setRating(null)
      });


  
  }

  const handleRating = (rate) => {
    setRating(rate);
  };



  return (
    <div className="bg-[#001D20]">
      <div className="max-w-3xl mx-auto mt-6 bg-[#1D232A] p-12 rounded-md">
        <h2 className="text-center text-4xl font-bold text-[#db9512] font-Rancho">
          Add New Movie
        </h2>
        <p className="text-center text-base text-gray-400 mt-3">
          An intuitive interface for adding movies to your collection. Provide
          details such as the movie poster, title, genre, duration, release
          year, rating, and a brief summary. Easily manage and enrich your movie
          library with these comprehensive inputs!
        </p>
        <form
          onSubmit={handleAddMovie}
          className="grid grid-cols-2 items-center gap-3 mt-6"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-base text-gray-100">
                Poster:
              </span>
            </label>
            <input
              type="text"
              name="poster"
              placeholder="Poster"
              className="input input-bordered text-white border border-gray-500 bg-[#1D232A] focus:border-gray-300"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-base text-gray-100">
                Title:
              </span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="input input-bordered text-white border border-gray-500 bg-[#1D232A] focus:border-gray-300"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-base text-gray-100">
                Genre:
              </span>
            </label>
            <select
              name="genre"
              id=""
              className="input input-bordered border border-gray-500 bg-[#1D232A] focus:border-gray-300 text-white"
            >
              <option value="Action" >Choose Genre</option>
              <option value="Action">Action</option>
              <option value="Drama">Drama</option>
              <option value="Thriller">Thriller</option>
              <option value="Adventure">Adventure</option>
              <option value="Crime">Crime</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-base text-gray-100">
                Duration:
              </span>
            </label>
            <input
              type="number"
              name="duration"
              placeholder="Duration"
              className="input input-bordered text-white border border-gray-500 bg-[#1D232A] focus:border-gray-300"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-base text-gray-100">
                Release Year:
              </span>
            </label>
            <DatePicker
              className="input input-bordered text-white border border-gray-500 bg-[#1D232A] focus:border-gray-300 w-full"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              showYearPicker
              dateFormat="yyyy"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-base text-gray-100">
                Rating:
              </span>
            </label>
            <Rating onClick={handleRating} ratingValue={rating}></Rating>
          </div>
          <div className="form-control col-span-2">
            <label className="label">
              <span className="label-text font-semibold text-base text-gray-100">
                Summary :
              </span>
            </label>
            <textarea
              placeholder="Summary"
              name="summary"
              className="textarea textarea-bordered textarea-md text-white border border-gray-500 bg-[#1D232A] focus:border-gray-300 w-full"
            ></textarea>
            {/* lg */}
          </div>
          <input
            className="mt-3 bg-[#db9512] btn text-white text-xl font-Rancho font-medium hover:bg-[#E50914] col-span-2"
            type="submit"
            value="Add Movie"
          />
        </form>
      </div>
    </div>
  );
};

export default AddMovie;
