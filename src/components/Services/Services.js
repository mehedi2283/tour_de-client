import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import ServiceCard from "../ServiceCard/ServiceCard";
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import "./Services.css";

const Places = () => {
  useTitle("Services");
  const services = useLoaderData();
  const { loading } = useContext(AuthContext);
  if(loading){

   
      console.log("Delayed for 1 second.");
   
  }

  if (loading) {
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
    <>
      <h1 className="font-black text-4xl text-center mb-5">All services</h1>
      
      <div className=" container mx-auto grid gap-10 justify-items-center mt-4  min-[1024px]:grid-cols-3 service-group grid-cols-2  max-[700px]:w-2/3">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </>
  );
};

export default Places;
