import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <div className="mb-6 sticky top-0 z-10">
        <Navbar></Navbar>
      </div>
      <div className="my-12 mb-40">
        <Outlet></Outlet>
      </div>
      <div className="mt-6 fixed bottom-0 w-full z-20">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
