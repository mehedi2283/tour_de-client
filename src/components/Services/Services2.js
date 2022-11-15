import {  useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import PlaceCard2 from "../ServiceCard/ServiceCard2";
import React, { useContext } from "react";

import './Services2.css'
// import { AuthContext } from "../../context/AuthProvider/AuthProvider";


const Places = () => {
  // useTitle("Services");

  const services = useLoaderData();
  // const { loading } = useContext(AuthContext);

  // if (loading) {
  //   return (
  //     <div className="border my-72 border-prima shadow rounded-md p-4 max-w-sm w-full mx-auto">
  //       <div className="animate-pulse flex space-x-4">
  //         <div className="rounded-full bg-gray-400 h-12 w-12"></div>
  //         <div className="flex-1 space-y-4 py-1">
  //           <div className="h-4 bg-gray-400 rounded w-3/4"></div>
  //           <div className="space-y-2">
  //             <div className="h-4 bg-gray-400 rounded"></div>
  //             <div className="h-4 bg-gray-400 rounded w-5/6"></div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className={`container  grid gap-3 justify-items-center grid-cols-3 w-3/4 mx-auto home-service  `}>
      

      {services.map((service) => (
        <PlaceCard2 key={service._id} service={service}></PlaceCard2>
      ))}
    </div>
  );
};

export default Places;
