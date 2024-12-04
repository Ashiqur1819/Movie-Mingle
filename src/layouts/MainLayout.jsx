import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const MainLayout = () => {
    return (
      <div>
        <header>
          <Navbar></Navbar>
        </header>
        <main className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <Outlet></Outlet>
        </main>
      </div>
    );
};

export default MainLayout;