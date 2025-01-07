import { Link } from "react-router-dom";
import errorImg from "../assets/err.png";

const Error = () => {
  return (
    <div className="max-w-7xl mx-auto min-h-screen">
      <img src={errorImg} className="mx-auto w-3/5" alt="" />
      <div className="flex items-center justify-center">
        <button className="bg-red-600  px-6 py-2 rounded-md text-white font-semibold text-lg hover:bg-red-500">
          <Link to="/">Back To Home</Link>
        </button>
      </div>
    </div>
  );
};

export default Error;
