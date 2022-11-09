import React from "react";
import Services from "../Services/Services";
import Slider from "../Slider/Slider";
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div>
      <h1 className="text-6xl font-black text-center">Welcome to tourDE</h1>
      <Slider></Slider>
      <Services></Services>
      <div className='flex justify-center mt-4'>
      <Link to='/services' ><button className='btn btn-primary '>View all services</button></Link>
      
      </div>

    </div>
  );
};

export default Home;
