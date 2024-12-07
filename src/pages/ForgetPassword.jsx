import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";



const ForgetPassword = () => {

    const {forgetPassword} = useContext(AuthContext)
    const navigate = useNavigate()


    const handleForgetPassword = (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      console.log(email)

        forgetPassword(email)
          .then(() => {
            navigate("/login");
            toast.success("Password reset link sent to your email!");
            window.open("https://mail.google.com/mail/u/0/#inbox", "_blank");
          })
          .catch((error) => {
            console.log(error)
            toast.error(
              "Failed to send the password reset email. Please try again later."
            );
          });
    };

    return (
      <div className="card w-full mx-auto max-w-lg rounded-none shrink-0 shadow-2xl mt-12  bg-[#1D232A]">
        <h2 className="text-3xl font-bold text-center mt-6 text-red-600">
          Reset Your Password
        </h2>
        <form onSubmit={handleForgetPassword} action="" className="card-body">
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
          <div className="form-control mt-3">
            <button className="py-2 px-6 text-lg bg-green-600  text-white cursor-pointer font-semibold hover:bg-green-500 ">
              Reset Password
            </button>
          </div>
        </form>
      </div>
    );
};

export default ForgetPassword;