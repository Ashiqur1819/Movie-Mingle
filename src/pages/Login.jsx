import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { loginWithGoogle, setUser, userLogin, toggle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handlelogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

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

    userLogin(email, password)
      .then((result) => {
        setUser(result.user);
        toast.success(` Login successful! Welcome back!`);
        navigate(location?.state ? location.state : "/");

        // Update last login time
        const lastSignInTime = result.user.metadata.lastSignInTime;

        const loginInfo = { email, lastSignInTime };

        fetch(`https://movie-mingle-server-side.vercel.app/users`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(loginInfo),
        }).then((res) => res.json());
      })
      .catch(() => {
        toast.error("Invalid login credentials. Please try again.");
      });
  };

  const handleLoginWithGoogle = () => {
    loginWithGoogle()
      .then((result) => {
        setUser(result.user);
        toast.success(`Google login successful!`);
        navigate(location?.state ? location.state : "/");
      })
      .catch(() => {
        toast.error(
          " Google login failed. Please check your connection and try again."
        );
      });
  };

  return (
    <div className="w-11/12 mx-auto">
      <div
        className={`card w-full mx-auto max-w-lg rounded-none shrink-0 shadow-sm mt-12 ${
          toggle ? "bg-[#000e0f] border border-gray-700" : "bg-white"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mt-6 text-yellow-500 drop-shadow-sm">
          Log In Your Account
        </h2>
        <form onSubmit={handlelogin} className="card-body px-8 py-0 mt-8">
          <div className="form-control">
            <label className="label">
              <span
                className={`label-text font-semibold text-base ${
                  toggle ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Email:
              </span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className={`input input-bordered rounded-none  focus:border-gray-300 ${
                toggle
                  ? "text-gray-300 bg-[#000e0f] border border-gray-500  "
                  : "bg-gray-50 border border-gray-200 text-gray-600 "
              }`}
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span
                className={`label-text font-semibold text-base ${
                  toggle ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Password:
              </span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              className={`input input-bordered rounded-none  focus:border-gray-300 ${
                toggle
                  ? "text-gray-300 bg-[#000e0f] border border-gray-500  "
                  : "bg-gray-50 border border-gray-200 text-gray-600 "
              }`}
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
                className={`label-text font-semibold text-sm hover:underline ${
                  toggle ? "text-gray-400" : "text-gray-500"
                }`}
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
          <div
            className={`divider font-medium ${
              toggle ? "text-gray-300" : "text-gray-600"
            }`}
          >
            OR
          </div>
          <button
            onClick={handleLoginWithGoogle}
            className="py-2 px-6 w-full text-lg border border-yellow-500  text-yellow-500 cursor-pointer font-medium hover:bg-amber-500 hover:text-white hover:border-white"
          >
            <div className="flex items-center justify-center gap-3">
              <FaGoogle></FaGoogle>
              <span>Log In with Google</span>
            </div>
          </button>
        </div>
        <p
          className={`text-center mt-3 mb-6 ${
            toggle ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Haven't any account?{" "}
          <Link to="/register" className="underline font-medium text-green-500">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
