import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Select from "react-select";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";

const UpdateMovie = () => {
  const {toggle} = useContext(AuthContext)
  const [startDate, setStartDate] = useState(new Date());
  const [selectedOption, setSelectedOption] = useState(null);

  const movie = useLoaderData();
  const { _id } = movie;

  const handleChange = (option) => {
    setSelectedOption(option);
  };
  
  const movieOptions = [
    { value: "action", label: "Action" },
    { value: "drama", label: "Drama" },
    { value: "comedy", label: "Comedy" },
    { value: "thriller", label: "Thriller" },
    { value: "adventure", label: "Adventure" },
    { value: "mystery", label: "Mystery" },
    { value: "crime", label: "Crime" },
    { value: "sci-Fi", label: "Sci-Fi" },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: toggle
        ? "#000e0f"
        : "rgb(249 250 251 / var(--tw-bg-opacity, 1))",
      border: toggle
        ? "border 1px solid #6B7280"
        : "border 1px solid #E5E7EBB2",
      borderRadius: "none",
      padding: "5px",
    }),
  };

  const handleUpdateMovie = (e) => {
    e.preventDefault();
    const form = e.target;
    const poster = form.poster.value;
    if (!poster.startsWith("http")) {
      return toast.error("Poster must be a valid URL.");
    }

    const title = form.title.value;
    if (title.length < 2) {
      return toast.error("Title must be at least 2 characters.");
    }

    const genre = selectedOption.map((option) => option.label);

    const duration = form.duration.value;
    if (duration <= 60) {
      return toast.error("Duration must be greater than 60 minutes.");
    }

    if (!startDate) {
      return toast.error("Release year is required.");
    }
    const year = startDate.getFullYear();

    const rating = form.rating.value;
    if (!rating || rating > 5) {
      return toast.error("Please provide a rating between 1 and 5.");
    }

    const summary = form.summary.value;
    if (summary.length < 10) {
      return toast.error("Summary must be at least 10 characters long.");
    }

    const updatedMovie = {
      poster,
      title,
      genre,
      year,
      duration,
      rating,
      summary,
    };

    // Send update movie data from server site to client site
    fetch(`https://movie-mingle-server-side.vercel.app/movies/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedMovie),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Success!",
            text: "Movie updated successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          e.target.reset();
        }
      });
  };
  return (
    <div
      className={`w-11/12 mx-auto ${toggle ? "bg-[#000e0f]" : "bg-gray-100"}`}
    >
      <div
        className={`max-w-3xl mx-auto mt-20 p-4 md:p-12 shadow-sm ${
          toggle ? "bg-[#000e0f] border border-gray-700" : "bg-white"
        }`}
      >
        <h2 className="text-center text-4xl font-bold  text-amber-500 font-Rancho">
          Update Movie
        </h2>
        <p
          className={`text-center mt-3 ${
            toggle ? "text-gray-300" : "text-gray-600"
          }`}
        >
          An intuitive interface for adding movies to your collection. Provide
          details such as the movie poster, title, genre, duration, release
          year, rating, and a brief summary. Easily manage and enrich your movie
          library with these comprehensive inputs!
        </p>
        <form
          onSubmit={handleUpdateMovie}
          className="grid grid-cols-2 items-center gap-3 mt-6"
        >
          <div className="form-control">
            <label className="label">
              <span
                className={`label-text font-semibold text-base ${
                  toggle ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Poster:
              </span>
            </label>
            <input
              type="text"
              name="poster"
              placeholder="Poster"
              className={`input input-bordered rounded-none  focus:border-gray-300 ${
                toggle
                  ? "text-gray-300 bg-[#000e0f] border border-gray-500  "
                  : "bg-gray-50 border border-gray-200 text-gray-600 "
              }`}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span
                className={`label-text font-semibold text-base ${
                  toggle ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Title:
              </span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Title"
              className={`input input-bordered rounded-none  focus:border-gray-300 ${
                toggle
                  ? "text-gray-300 bg-[#000e0f] border border-gray-500  "
                  : "bg-gray-50 border border-gray-200 text-gray-600 "
              }`}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span
                className={`label-text font-semibold text-base ${
                  toggle ? "text-gray-300" : "text-gray-700"
                }`}
              >
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
              <span
                className={`label-text font-semibold text-base ${
                  toggle ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Duration:
              </span>
            </label>
            <input
              type="number"
              name="duration"
              placeholder="Duration"
              className={`input input-bordered rounded-none  focus:border-gray-300 ${
                toggle
                  ? "text-gray-300 bg-[#000e0f] border border-gray-500  "
                  : "bg-gray-50 border border-gray-200 text-gray-600 "
              }`}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span
                className={`label-text font-semibold text-base ${
                  toggle ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Release Year:
              </span>
            </label>
            <DatePicker
              className={`input input-bordered rounded-none  focus:border-gray-300 w-full ${
                toggle
                  ? "border border-gray-500 bg-[#000e0f] text-gray-300 "
                  : "bg-gray-50 text-gray-600"
              }`}
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              showYearPicker
              dateFormat="yyyy"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span
                className={`label-text font-semibold text-base ${
                  toggle ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Rating:
              </span>
            </label>
            <input
              type="number"
              name="rating"
              placeholder="Rating"
              className={`input input-bordered rounded-none  focus:border-gray-300 ${
                toggle
                  ? "text-gray-300 bg-[#000e0f] border border-gray-500  "
                  : "bg-gray-50 border border-gray-200 text-gray-600 "
              }`}
            />
          </div>
          <div className="form-control col-span-2">
            <label className="label">
              <span
                className={`label-text font-semibold text-base ${
                  toggle ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Summary :
              </span>
            </label>
            <textarea
              placeholder="Summary"
              name="summary"
              className={`textarea textarea-bordered rounded-none textarea-md  focus:border-gray-300 w-full ${
                toggle
                  ? "text-gray-300 border border-gray-500 bg-[#000e0f]"
                  : "text-gray-600 bg-gray-50 border-gray-200"
              }`}
            ></textarea>
          </div>
          <input
            className="mt-3 bg-green-600 btn rounded-none text-white text-xl font-Rancho font-medium hover:bg-green-500 col-span-2"
            type="submit"
            value="Update Movie"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateMovie;
