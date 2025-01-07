import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    loginWithGoogle,
    setUser,
    createNewUser,
    updateUserProfile,
    setLoading,
    toggle
  } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    const user = { name, email, photo};

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

    createNewUser(email, password)
      .then((result) => {
        setUser(result.user);
        toast.success(`Registration successful!`);

        updateUserProfile({ displayName: name, photoURL: photo }).then(() => {
          setUser((prev) => ({
            ...prev,
            displayName: name,
            photoURL: photo,
          }));
          navigate(location?.state ? location.state : "/");
          setLoading(false);

          // Send data from client site to server side
          fetch("https://movie-mingle-server-side.vercel.app/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(user),
          }).then((res) => res.json());
        });
      })
      .catch(() =>
        toast.error(
          "Oops! We couldn't create your account. Please check your details and try again."
        )
      );
  };

  const handleLoginWithGoogle = () => {
    loginWithGoogle()
      .then((result) => {
        setUser(result.user);
        toast.success(`Google login successful!`);
        navigate("/");
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
        <h2 className="text-3xl md:text-4xl font-bold text-center mt-6 text-green-500">
          Create A New Account
        </h2>
        <form onSubmit={handleRegister} className="card-body px-8 py-0 mt-8">
          <div className="form-control">
            <label className="label">
              <span
                className={`label-text font-semibold text-base ${
                  toggle ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Name:
              </span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className={`input input-bordered rounded-none  focus:border-gray-300 ${
                toggle
                  ? "text-gray-300 bg-[#000e0f] border border-gray-500  "
                  : "bg-gray-50 border border-gray-200 text-gray-600 "
              }`}
              required
            />
          </div>
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
          <div className="form-control">
            <label className="label">
              <span
                className={`label-text font-semibold text-base ${
                  toggle ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Photo URL:
              </span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter your photo url"
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
          </div>
          <div className="form-control mt-6">
            <button className="py-2 px-6 text-lg bg-yellow-500  text-white cursor-pointer font-semibold hover:bg-amber-500 ">
              Register
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
            className="py-2 px-6 w-full text-lg border border-green-500  text-green-500 cursor-pointer font-medium hover:bg-green-600 hover:text-white hover:border-white"
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
          Already have an account?{" "}
          <Link to="/login" className="underline font-medium text-yellow-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
