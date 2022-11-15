import React from "react";
import { Link } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import './ServiceCard.css'

const PlaceCard = ({ service }) => {
  // console.log(service)

  return (
    <PhotoProvider>
      <div className="card border-2  border-primary/40 hover:border-primary/90 card-compact w-72    shadow-xl duration-200 transform hover:scale-105 service-card">
        <figure className="">
          <PhotoView src={service.img}>
            <img src={service.img} alt="" />
          </PhotoView>
         
        </figure>
        <div className="card-body glass-primary">
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

export default PlaceCard;
