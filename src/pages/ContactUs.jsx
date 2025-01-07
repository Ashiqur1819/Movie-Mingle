import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const ContactUs = () => {
  const {toggle} = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const name = data.example;
    const email = data.exampleRequired;
    const contactUser = { name, email };

    // Send contact user data from client site to server site
    fetch("https://movie-mingle-server-side.vercel.app/contact_users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(contactUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Congratulations",
            showConfirmButton: false,
            timer: 1000,
          });
          navigate("/");
        }
      });
  };

  return (
    <div className="w-11/12 mx-auto">
      <div
        className={` max-w-md mx-auto p-4 md:p-6 lg:p-12 rounded-md mt-20 ${
          toggle ? "bg-[#000e0f] border border-gray-700" : "bg-white"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 text-center mb-6">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <input
            type="text"
            className="p-2 input mb-3 input-bordered"
            placeholder="Name"
            {...register("example")}
          />

          <input
            type="email"
            className="p-2 input mb-3 input-bordered"
            placeholder="Email"
            {...register("exampleRequired", { required: true })}
          />

          {errors.exampleRequired && (
            <span className="text-red-500">This field is required</span>
          )}

          <input
            className="text-white p-2 bg-green-600 input cursor-pointer font-medium"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
