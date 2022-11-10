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
    <>

<h1 className="font-black text-4xl text-center mb-5">All services</h1>
<hr />
    <div className="container mx-auto grid gap-10 justify-items-center grid-cols-3 w-2/4  mt-4">
 

      {services.map((service) => (
        <ServiceCard key={service._id} service={service}></ServiceCard>
      ))}
    </div>
    </>
  );
};

export default Places;
