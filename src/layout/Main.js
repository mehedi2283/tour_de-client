import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import './main.css'


const Main = () => {
  return (
    <div>
      <div id="navbar" className="mb-6 duration-300  bg-base-100/95 drop-shadow-xl shadow-primary sticky top-0 z-10">
        <Navbar></Navbar>
      </div>
      <div className="pb-24 outlet ">
        <Outlet></Outlet>
      </div>
      <div  className="">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
