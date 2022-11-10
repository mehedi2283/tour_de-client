import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import ServiceCard from "../ServiceCard/ServiceCard";

const Places = () => {
  useTitle("Services");

  const services = useLoaderData();
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
