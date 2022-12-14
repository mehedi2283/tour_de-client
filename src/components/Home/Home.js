import React, { useContext } from "react";
import Services2 from "../Services/Services2";
import Slider from "../Slider/Slider";
import { Link, useLoaderData } from "react-router-dom";
import { HiChevronDoubleUp } from "react-icons/hi2";
import "./Home.css";
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import bannerImg from "../../assets/home-card-banner.webp"

const Home = () => {
  useTitle("Home");
  const services = useLoaderData();

  const { loading } = useContext(AuthContext);

  if(loading){

    console.log("first")
  }
  return (
    <>
      {loading ? (
        <div className="border my-72 border-primary/70 shadow rounded-md p-4 max-w-sm w-full mx-auto">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-primary h-12 w-12"></div>
            <div className="flex-1 space-y-4 py-1">
              <div className="h-4 bg-primary rounded w-3/4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-primary rounded"></div>
                <div className="h-4 bg-primary rounded w-5/6"></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1
            id="services"
            className=" text-4xl sm:text-6xl font-black text-center w-auto mb-9"
          >
            Welcome to tourDE
          </h1>

          <div className="grid grid-cols-4 home-service-container">
            <div className="col-span-1">
              <div className=" grid gap-4 home-service-btn-container ">
                {services.map((service) => (
                  <Link
                    className="btn btn-primary home-serviceName-btn ml-auto w-1/2 me-auto transform hover:scale-110"
                    key={service._id}
                  >
                    {service.place_name}
                  </Link>
                ))}
                <Link
                  to="/services"
                  className="home-serviceName-btn btn btn-primary w-1/2 ml-auto transform hover:scale-110"
                >
                  Show all
                </Link>
              </div>
            </div>

            <div className=" col-span-3 ">
              <Services2></Services2>
            </div>
          </div>
          <div className="flex justify-center mt-4 mb-4">
            <Link
              to="/services"
              className="btn btn-primary transform hover:scale-110"
            >
              View all services
            </Link>
          </div>
          <Slider></Slider>
          <div className="border  mx-auto  mb-4 home-banner-card border-primary/30">
            <div className="card rounded-none lg:card-side bg-base-100 shadow-xl">
              <figure className="">
                <img
                  className="h-48 w-full object-cover md:h-full "
                  src={bannerImg}
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
                    className="hover:text-white btn-circle btn-primary transition btn btn-outline"
                    href="#services"
                  >
                    <HiChevronDoubleUp className="h-6 w-6 text-center " />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );

  /* if (loading) {
    return (
      <div className="border my-72 border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
  <div className="animate-pulse flex space-x-4">
    <div className="rounded-full bg-gray-400 h-12 w-12"></div>
    <div className="flex-1 space-y-4 py-1">
      <div className="h-4 bg-gray-400 rounded w-3/4"></div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-400 rounded"></div>
        <div className="h-4 bg-gray-400 rounded w-5/6"></div>
      </div>
    </div>
  </div>
</div>
    );
  }

  return (
    <div>
      <h1 id="services" className=" text-4xl sm:text-6xl font-black text-center w-auto mb-9">
        Welcome to tourDE
      </h1>

      <div className="grid grid-cols-4 home-service-container">
        <div className="col-span-1">
        <div className=" grid gap-4 home-service-btn-container ">
          {services.map((service) => (
            <Link className="btn btn-outline home-serviceName-btn ml-auto w-1/2 me-auto transform hover:scale-110" key={service._id}>{service.place_name}</Link>
          ))}
          <Link to='/services' className="home-serviceName-btn btn btn-outline w-1/2 ml-auto transform hover:scale-110" >Show all</Link>
        </div>
        </div>
        

        <div className=" col-span-3">
          <Services2></Services2>
        </div>
      </div>
      <div className="flex justify-center mt-4 mb-4">
        <Link to="/services" className="btn btn-primary transform hover:scale-110">View all services
          
        </Link>
      </div>
      <Slider></Slider>
      <div className="border  mx-auto rounded-xl mb-4 home-banner-card">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure className="">
            <img
              className="h-48 w-full object-cover md:h-full"
              src="https://i.ibb.co/vXJFKhY/home-card-banner.webp"
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
  ); */
};

export default Home;
