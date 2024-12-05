import { Link } from "react-router-dom";
import errorImg from "../assets/404.gif"

const Error = () => {
    return (
      <div className="max-w-7xl mx-auto">
        <img src={errorImg} className="mx-auto" alt="" />
        <div className="flex items-center justify-center">
          <button className="bg-red-600  px-6 py-2 rounded-md text-white font-semibold text-lg">
            <Link to="/">Back To Home</Link>
          </button>
        </div>
      </div>
    );
};

export default Error;