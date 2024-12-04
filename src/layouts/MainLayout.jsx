import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
  import { ToastContainer} from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";


const MainLayout = () => {
    return (
      <div className="bg-[#001D20] max-w-7xl mx-auto">
        <header>
          <Navbar></Navbar>
        </header>
        <main>
          <Outlet></Outlet>
        </main>
        <ToastContainer></ToastContainer>
      </div>
    );
};

export default MainLayout;