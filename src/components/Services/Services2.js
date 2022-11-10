import {  useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import ServiceCard from "../ServiceCard/ServiceCard";


const Places = () => {
  useTitle("Services");

  const services = useLoaderData();
  return (
    <div className={`ontainer  grid gap-3 justify-items-center min-[1600px]:grid-cols-3 min-[1050px]:grid-cols-2 w-3/4 `}>
      

      {services.map((service) => (
        <ServiceCard key={service._id} service={service}></ServiceCard>
      ))}
    </div>
  );
};

export default Places;
