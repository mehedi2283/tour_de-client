import React from "react";
import Services from "../Services/Services";
import Slider from "../Slider/Slider";
import { Link } from "react-router-dom";
import { HiChevronDoubleDown } from "react-icons/hi2";
import './Home.css'

const Home = () => {
  return (
    <div>
      <h1 className="text-6xl font-black text-center mb-2">
        Welcome to tourDE
      </h1>
      <Slider></Slider>
      <div className="border w-2/3 mx-auto rounded-xl mb-4">
        <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure className="w-1/2"><img  src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_891573112_2000133320009280337_373947.jpg" alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title font-bold text-3xl">To <br /> Get more <br />Details explore our <br /> All services</h2>
    <p>Explore some services from bellow</p>
    <div className=' duration-300 animate-bounce'>
                        <a className='hover:text-white btn-circle transition btn btn-outline' href="#services"><HiChevronDoubleDown className="h-6 w-6 text-center " /></a>
                    </div>
  </div>
</div>
      </div>
      <div id='services'><Services></Services></div>
      <div className="flex justify-center mt-4">
        <Link to="/services">
          <button className="btn btn-primary ">View all services</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
