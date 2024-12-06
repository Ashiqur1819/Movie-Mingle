import { useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";


const Login = () => {
      const [showPassword, setShowPassword] = useState(false);
    return (
      <div className="card w-full mx-auto max-w-lg rounded-none shrink-0 shadow-2xl mt-12  bg-[#1D232A]">
        <h2 className="text-3xl font-bold text-center mt-6 text-yellow-500">
          Log In Your Account
        </h2>
        <form className="card-body px-8 py-0 mt-8">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-base text-gray-100">
                Email:
              </span>
            </label>
            <input
              type="email"
              name="email"
              // onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
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
            <label className="mt-2 ">
              <Link
                to="/forget_password"
                href="#"
                className="label-text font-medium text-sm text-gray-400 hover:text-gray-300"
              >
                Forgot password?
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="py-2 px-6 text-lg bg-green-600  text-white cursor-pointer font-semibold hover:bg-green-500 ">
              Log In
            </button>
          </div>
        </form>
        <div className="px-8">
          <h4 className="text-center text-lg my-2 font-medium text-white">Or</h4>
          <button
            className="py-2 px-6 w-full text-lg border border-yellow-500  text-yellow-500 cursor-pointer font-medium hover:bg-amber-500 hover:text-white hover:border-white"
          >
            <div className="flex items-center justify-center gap-3">
              <FaGoogle></FaGoogle>
              <span>Log In with Google</span>
            </div>
          </button>
        </div>
        <p className="text-center mt-3 mb-6 text-gray-300">Haven't any account? <Link to="/register" className="underline font-medium text-green-500">
            Register
          </Link>
        </p>
      </div>
    );
};

export default Login;