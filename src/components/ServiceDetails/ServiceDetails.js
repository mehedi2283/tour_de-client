import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Review from "../Review/Review";
import { AuthContext } from "./../../context/AuthProvider/AuthProvider";

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  const serviceDetails = useLoaderData();
  const { _id,img, place_name, ratings, price, details } = serviceDetails;
  // console.log(serviceDetails);

  const handleSubmit = (event)=>{
    event.preventDefault()
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const phone = form.phone.value;
    const email = user?.email || 'unregistered';
    const message = form.review.value;

    const review = {
      service: _id,
      serviceName: place_name,
      price,
      ratings,
      customer: name,
      email,
      phone,
      message

    }

    fetch('http://localhost:5000/reviews',{
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body:JSON.stringify(review)

    })
    .then(res=>res.json())
    .then(data=>{
      if(data.acknowledged){
        alert('Review placed successfully')
        form.reset();
      }
    })
    .catch(err=> console.log(err));

    
  }
  const [reviews,setReviews] = useState([])
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?service=${_id}`)
    .then(res=>res.json())
    .then(data=>setReviews(data))
    .catch(err=> console.log(err));

  },[_id]);
  console.log(reviews.length);

  return (
    <div className="grid grid-cols-3 my-auto mx-12 gap-2 ">
      <div className="card w-96 glass mx-auto  ">
        <figure>
          <img src={img} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{place_name}</h2>
          <p>{details}</p>
          <div className="flex justify-between">
            <span>{price} tk</span>
            <span>{ratings}</span>
          </div>
          <div className="card-actions ">
            <button className="btn btn-primary w-full">Learn now!</button>
          </div>
        </div>
      </div>
      <div>
          {
            reviews.map(review =><Review
               key={review._id}
               review={review}
               ></Review>)
          }
      </div>

      {user?.uid ? (
        <form onSubmit={handleSubmit}>
          <h3 className="text-center text-3xl font-bold my-4 ">
            Add your review
          </h3>
          <div className="my-auto w-10/12 mx-auto">
            <div className="grid grid-cols-1 my-auto  gap-4 w-full">
              <input
              required
              name="firstName"
                type="text"
                placeholder="First Name"
                className="input input-bordered w-full "
              />
              <input
              required
              name="lastName"
                type="text"
                placeholder="Last Name"
                className="input input-bordered w-full"
              />
              <input
              required
              name="phone"
                type="text"
                placeholder="Phone Number"
                className="input input-bordered w-full "
              />
              <input
              name="email"
                type="text"
                placeholder="Email"
                className="input input-bordered  w-full"
                defaultValue={user?.email}
                readOnly
              
              />
            </div>

            <textarea
            name="review"
            required
              className="textarea textarea-bordered w-full  mt-4 h-40"
              placeholder="Please give your honest review here for this service"
            ></textarea>
          </div>
          <div className="flex flex-row-reverse">
            <input
              type="submit"
              value="Add review"
              className="btn btn-primary"
            />
          </div>
        </form>
      ) : (
        <div className="text-center my-auto">
          <h1 className="text-4xl font-bold">Please Login first</h1>
          <Link to="/login" className="btn btn-primary mt-4">
            Login From here
          </Link>
        </div>
      )}
    </div>
  );
};

export default ServiceDetails;
