import {  useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import ServiceCard from "../ServiceCard/ServiceCard";
import { useContext } from 'react';
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Places = () => {
  useTitle("Services");
  const services = useLoaderData();
  const { loading } = useContext(AuthContext);


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
<hr />
    <div className=" container mx-auto grid gap-10 justify-items-center min-[1600px]:grid-cols-3 w-2/4  mt-4 min-[1700px]:grid-cols-3 min-[1050px]:grid-cols-2 ">
 

      {services.map((service) => (
        <ServiceCard key={service._id} service={service}></ServiceCard>
      ))}
    </div>
    </>
  );
};

export default Places;
