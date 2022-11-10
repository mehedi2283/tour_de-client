import React, { useContext } from "react";
import Services2 from "../Services/Services2";
import Slider from "../Slider/Slider";
import { Link, useLoaderData } from "react-router-dom";
import { HiChevronDoubleUp } from "react-icons/hi2";
import "./Home.css";
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Home = () => {
  useTitle("Home");
  const services = useLoaderData();


  const { loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div class="border my-72 border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
  <div class="animate-pulse flex space-x-4">
    <div class="rounded-full bg-gray-400 h-12 w-12"></div>
    <div class="flex-1 space-y-4 py-1">
      <div class="h-4 bg-gray-400 rounded w-3/4"></div>
      <div class="space-y-2">
        <div class="h-4 bg-gray-400 rounded"></div>
        <div class="h-4 bg-gray-400 rounded w-5/6"></div>
      </div>
    </div>
  </div>
</div>
    );
  }

  return (
    <div>
      <h1 id="services" className="text-6xl font-black text-center mb-9">
        Welcome to tourDE
      </h1>

      <div className="grid grid-cols-4">
        <div className=" flex flex-col gap-4 ">
          {services.map((service) => (
            <Link className="btn btn-outline mx-auto w-1/2 me-auto" key={service._id}>{service.place_name}</Link>
          ))}
          <Link to='/services' className="btn bg-slate-300 btn-outline w-1/2 mx-auto" >Show all</Link>
        </div>
        

        <div className=" col-span-3">
          <Services2></Services2>
        </div>
      </div>
      <div className="flex justify-center mt-4 mb-4">
        <Link to="/services">
          <button className="btn btn-primary ">View all services</button>
        </Link>
      </div>
      <Slider></Slider>
      <div className="border w-2/3 mx-auto rounded-xl mb-4">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure className="">
            <img
              className="h-48 w-full object-cover md:h-full"
              src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_891573112_2000133320009280337_373947.jpg"
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold text-3xl">
              To <br /> Get more <br />
              Details explore our <br /> All services
            </h2>
            <p>Explore some services from bellow</p>
            <div className=" duration-300 animate-bounce">
              <a
                className="hover:text-white btn-circle transition btn btn-outline"
                href="#services"
              >
                <HiChevronDoubleUp className="h-6 w-6 text-center " />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
