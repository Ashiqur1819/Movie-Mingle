import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const name = data.example;
    const email = data.exampleRequired
    const contactUser = {name, email}

    // Send contact user data from client site to server site
    fetch("https://movie-mingle-server-side.vercel.app/contact_users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(contactUser),
    })
    .then((res) => res.json())
    .then(data => {
      if (data.acknowledged) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Congratulations",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };


  return (
    <div className=" max-w-md mx-auto bg-[#002c31] p-12 rounded-md mt-12">
      <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 text-center mb-6">
        Contact Us
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <input
          type="text"
          className="p-2 input mb-3"
          placeholder="Name"
          {...register("example")}
        />

        <input
          type="email"
          className="p-2 input mb-3"
          placeholder="Email"
          
          {...register("exampleRequired", { required: true })}
        />

        {errors.exampleRequired && <span className="text-red-500">This field is required</span>}

        <input
          className="text-white p-2 bg-green-600 input cursor-pointer"
          type="submit"
        />
      </form>
    </div>
  );
};

export default ContactUs;
