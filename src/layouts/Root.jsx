import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";

const Root = () => {
  return (
    <div className="">
      <div className="mb-16">
        <Navbar></Navbar>
      </div>

      <div className="min-h-[calc(100vh-64px)]">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Root;

// section mb-20
// section heading h2, text-3xl, font-bold
// mx-5 md:mx-20
