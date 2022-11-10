import {  useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import PlaceCard2 from "../ServiceCard/ServiceCard2";

import './Services2.css'


const Places = () => {
  useTitle("Services");

  const services = useLoaderData();
  return (
    <div className={`container  grid gap-3 justify-items-center grid-cols-3 w-3/4 mx-auto home-service `}>
      

      {services.map((service) => (
        <PlaceCard2 key={service._id} service={service}></PlaceCard2>
      ))}
    </div>
  );
};

export default Places;
