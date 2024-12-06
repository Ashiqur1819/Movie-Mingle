import { toast } from "react-toastify";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import Swal from "sweetalert2";

const AddMovie = () => {

 const [startDate, setStartDate] = useState(new Date());
 const [selectedOption, setSelectedOption] = useState(null)

 const handleChange = option => {
  setSelectedOption(option)
 }

 const movieOptions = [
   { value: "action", label: "Action" },
   { value: "drama", label: "Drama" },
   { value: "comedy", label: "Comedy" },
   { value: "thriller", label: "Thriller" },
   { value: "adventure", label: "Adventure" },
 ];

 const customStyles = {
   control: (provided) => ({
     ...provided,
     backgroundColor: "#1D232A",
     border: "none",
     padding: "5px"
   }),
 };

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



    const genre = selectedOption.map((option) => option.label);

      const duration = form.duration.value;
      if (duration <= 60) {
        return toast.error("Duration must be greater than 60 minutes.");
      }


    if(!startDate){
      return toast.error("Release year is required.");
    }
    const year = startDate.getFullYear()

    
    const rating = form.rating.value;
     if (!rating || rating > 5) {
       return toast.error("Please provide a rating between 1 and 5.");
     }


    const summary = form.summary.value;
    if(summary.length < 10){
      return toast.error("Summary must be at least 10 characters long.");
    }


    const newMovie = { poster, title, genre, year, duration, rating, summary };
    
    // Send data from client side to server side
    fetch("https://movie-mingle-server-side.vercel.app/movies", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newMovie),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.acknowledged){
          Swal.fire({
            title: `${title} Successfully Added!`,
            imageUrl: poster,
            imageWidth: 200,
            imageAlt: "Custom image",
          });
        }
        form.reset();
        // setRating(null)
      });


  
  }



  return (
    <div className="bg-[#001D20]">
      <div className="max-w-3xl mx-auto mt-6 bg-[#1D232A] p-12 rounded-md">
        <h2 className="text-center text-4xl font-bold  text-amber-500 font-Rancho">
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
              className="input input-bordered rounded-none text-white border border-gray-500 bg-[#1D232A] focus:border-gray-300"
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
              className="input input-bordered rounded-none text-white border border-gray-500 bg-[#1D232A] focus:border-gray-300"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-base text-gray-100">
                Genre:
              </span>
            </label>

            <span className=" input-bordered rounded-none border border-gray-500 bg-[#1D232A] focus:border-gray-300 basic-multi-select">
              <Select
                onChange={handleChange}
                isMulti
                name="colors"
                options={movieOptions}
                classNamePrefix="Select Movie Genre"
                styles={customStyles}
              />
            </span>
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
              className="input input-bordered rounded-none text-white border border-gray-500 bg-[#1D232A] focus:border-gray-300"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-base text-gray-100">
                Release Year:
              </span>
            </label>
            <DatePicker
              className="input input-bordered rounded-none text-white border border-gray-500 bg-[#1D232A] focus:border-gray-300 w-full"
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
            <input
              type="number"
              name="rating"
              placeholder="Rating"
              className="input input-bordered rounded-none text-white border border-gray-500 bg-[#1D232A] focus:border-gray-300"
            />
            {/* <Rating onClick={handleRating} ratingValue={rating}></Rating> */}
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
              className="textarea textarea-bordered rounded-none textarea-md text-white border border-gray-500 bg-[#1D232A] focus:border-gray-300 w-full"
            ></textarea>
            {/* lg */}
          </div>
          <input
            className="mt-3 bg-green-600 btn rounded-none text-white text-xl font-Rancho font-medium hover:bg-green-500 col-span-2"
            type="submit"
            value="Add Movie"
          />
        </form>
      </div>
    </div>
  );
};

export default AddMovie;
