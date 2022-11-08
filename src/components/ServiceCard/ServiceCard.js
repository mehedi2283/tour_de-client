import React from 'react';
import { Link } from 'react-router-dom';

const PlaceCard = ({service}) => {
  // console.log(service)
 
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={service.img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{service.place_name}</h2>
    <p>{(service.details.slice(1,100))}...</p>
    <div className="card-actions justify-end">
      <Link to={`/details/${service._id}`}><button className="btn btn-primary">Details</button></Link>
    </div>
  </div>
</div>
    );
};

export default PlaceCard;