import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";


const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { loginWithGoogle, setUser } = useContext(AuthContext);

    const handleRegister = e => {
      e.preventDefault()
      const form = e.target;
      const name = form.name.value;
      const email = form.email.value;
      const photo = form.photo.value;
      const password = form.password.value;

      const user = {name, email, photo, password}

      if (password.length < 6) {
        toast.error("Password must be at least 6 characters long!");
        return;
      }

      if (!/[A-Z]/.test(password)) {
        toast.error("Password must contain at least one uppercase letter!");
        return;
      }

      if (!/[a-z]/.test(password)) {
        toast.error("Password must contain at least one lowercase letter!");
        return;
      }
    }

    const handleLoginWithGoogle = () =>{
      loginWithGoogle()
      .then(result => {
        setUser(result.user)
           toast.success(`Google login successful!`);
      })
      .catch((error) => {
        toast.error(
          " Google login failed. Please check your connection and try again."
        );
      })
    }


    return (
      <div className="card w-full mx-auto max-w-lg rounded-none shrink-0 shadow-2xl mt-12  bg-[#1D232A]">
        <h2 className="text-4xl font-bold text-center mt-6 text-green-500">
          Create A New Account
        </h2>
        <form onSubmit={handleRegister} className="card-body px-8 py-0 mt-8">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-base text-gray-100">
                Name:
              </span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered rounded-none text-white border border-gray-500 bg-[#1D232A] focus:border-gray-300"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-base text-gray-100">
                Email:
              </span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered rounded-none text-white border border-gray-500 bg-[#1D232A] focus:border-gray-300"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-base text-gray-100">
                Photo URL:
              </span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter your photo url"
              className="input input-bordered rounded-none text-white border border-gray-500 bg-[#1D232A] focus:border-gray-300"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text font-semibold text-base text-gray-100">
                Password:
              </span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              className="input input-bordered rounded-none text-white border border-gray-500 bg-[#1D232A] focus:border-gray-300"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-[57px] text-gray-400"
            >
              {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </button>
          </div>
          <div className="form-control mt-6">
            <button className="py-2 px-6 text-lg bg-yellow-600  text-white cursor-pointer font-semibold hover:bg-amber-500 ">
              Register
            </button>
          </div>
        </form>
        <div className="px-8">
          <h4 className="text-center text-lg my-2 font-medium text-white">
            Or
          </h4>
          <button
            onClick={handleLoginWithGoogle}
            className="py-2 px-6 w-full text-lg border border-green-500  text-green-500 cursor-pointer font-medium hover:bg-green-600 hover:text-white hover:border-white"
          >
            <div className="flex items-center justify-center gap-3">
              <FaGoogle></FaGoogle>
              <span>Log In with Google</span>
            </div>
          </button>
        </div>
        <p className="text-center mt-3 mb-6 text-gray-300">
          Already have an account?{" "}
          <Link to="/login" className="underline font-medium text-yellow-600">
            Login
          </Link>
        </p>
      </div>
    );
};

export default Register;