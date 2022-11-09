import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Review from "../Review/Review";
import { AuthContext } from "./../../context/AuthProvider/AuthProvider";
import { PhotoProvider, PhotoView } from "react-photo-view";

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  const serviceDetails = useLoaderData();
  const { _id, img, place_name, ratings, price, details } = serviceDetails;
  console.log(_id)
  const [reviews, setReviews] = useState([]);
  console.log(reviews);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const phone = form.phone.value;
    const email = user?.email || "unregistered";
    const message = form.review.value;

    const review = {
      service: _id,
      serviceName: place_name,
      price,
      ratings,
      customer: name,
      email,
      phone,
      message,
      img: user.photoURL,
    };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Review placed successfully");
          form.reset();
          // const remaining = reviews.filter(rvw=> rvw._id !== _id)
          //     const newRvw = reviews.find(rvw=> rvw._id === _id)
          //     const newReviews = [newRvw,...remaining]
          //     setReviews(newReviews)
          fetch(`http://localhost:5000/reviews?service=${_id}`)
            .then((res) => res.json())
            .then((data) => {setReviews(data)})
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?service=${_id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.log(err));
  }, [_id]);
  console.log(reviews.length);

  return (
    <PhotoProvider>
    <div className="grid grid-cols-7 my-auto mx-12 gap-2 ">
      <div className="card  glass mx-auto col-span-2 ">
      <PhotoView src={img}>
            <img className="rounded-lg" src={img} alt="" />
          </PhotoView>
        <div className="card-body">
          <h2 className="card-title">{place_name}</h2>
          <p>{details}</p>
          <div className="flex justify-between">
            <span><strong> {price} tk</strong></span>
            <span><strong>{ratings}</strong></span>
          </div>
          
        </div>
      </div>
      <div className="col-span-3 rounded-lg border p-3">
        <div className="overflow-x-auto w-full">
        <h3 className="text-center text-3xl font-bold my-4 ">
             User reviews
            </h3>
          <table className="table w-full">
            <thead>
              <tr>
                <th>Name & phone</th>
                <th>message & Email</th>
                <th>service Name</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review) => (
                <Review key={review._id} review={review}></Review>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="col-span-2 rounded-lg border">
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
          <div className="text-center mt-44">
            <h1 className="text-4xl font-bold">Please Login first</h1>
            <Link to="/login" className="btn btn-primary mt-4">
              Login From here
            </Link>
          </div>
        )}
      </div>
    </div>
    </PhotoProvider>
  );
};

export default ServiceDetails;
