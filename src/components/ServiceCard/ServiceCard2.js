import React from "react";
import { Link } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import './ServiceCard2.css'

const PlaceCard2 = ({ service }) => {
  // console.log(service)

  return (
    <PhotoProvider>
      <div className="card  card-compact w-72 bal bg-base-100 shadow-xl duration-200 transform hover:scale-105 service-card2">
        <figure>
          <PhotoView src={service.img}>
            <img src={service.img} alt="" />
          </PhotoView>
         
        </figure>
        <div className="card-body">
          <h2 className="card-title">{service.place_name}</h2>
          <p>{service.details.slice(1, 100)}...</p>
          <div className="card-actions justify-end">
            <Link to={`/services/details/${service._id}`}>
              <button className="btn btn-primary">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </PhotoProvider>
  );
};

export default PlaceCard2;
