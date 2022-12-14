import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Review from "../Review/Review";
import { AuthContext } from "./../../context/AuthProvider/AuthProvider";
import { PhotoProvider, PhotoView } from "react-photo-view";
import useTitle from "../../hooks/useTitle";
import toast from "react-hot-toast";

const ServiceDetails = () => {
  useTitle("Details");
  const { user } = useContext(AuthContext);
  // console.log(user);
  const serviceDetails = useLoaderData();
  const { _id, img, place_name, ratings, price, details } = serviceDetails;

  const [reviews, setReviews] = useState([]);

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
        authorization: `Bearer ${localStorage.getItem("tourDE-token")}`,
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Review placed successfully");
          form.reset();

          fetch(
            `http://localhost:5000/reviews?service=${_id}`
          )
            .then((res) => res.json())
            .then((data) => {
              setReviews(data);
            })
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

  return (
    <PhotoProvider>
      <div className="grid grid-cols-7 my-auto mx-12 gap-2   ">
        <div className="card rounded-2xl  col-span-7 mx-auto lg:col-span-2  border border-primary  ">
          <PhotoView src={img}>
            <img className=" rounded-t-2xl" src={img} alt="" />
          </PhotoView>
          <div className="card-body rounded-b-2xl">
            <h2 className="card-title">{place_name}</h2>
            <p>{details}</p>
            <div className="flex justify-between">
              <span>
                <strong> {price} tk</strong>
              </span>
              <span>
                <strong>Ratings: {ratings}</strong>
              </span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3 max-sm:col-span-7 col-span-4 rounded-2xl border border-primary p-3">
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

        <div className=" lg:col-span-2 max-sm:col-span-7 col-span-3 rounded-2xl border border-primary">
          {user?.uid ? (
            <form onSubmit={handleSubmit}>
              <h3 className="text-center text-3xl font-bold my-4  ">
                Add your review
              </h3>
              <div className="my-auto w-10/12 mx-auto">
                <div className="grid grid-cols-1 my-auto  gap-4 w-full">
                  <input
                    required
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    className="input input-bordered  w-full focus:bg-primary/10 bg-primary/5  focus:outline-0 focus:border-primary focus:text-primary text-primary "
                  />
                  <input
                    required
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    className="input input-bordered  w-full focus:bg-primary/10 bg-primary/5  focus:outline-0 focus:border-primary focus:text-primary text-primary"
                  />
                  <input
                    required
                    name="phone"
                    type="text"
                    placeholder="Phone Number"
                    className="input input-bordered  w-full focus:bg-primary/10 bg-primary/5  focus:outline-0 focus:border-primary text-primary"
                  />
                  <input
                    name="email"
                    type="text"
                    placeholder="Email"
                    className="input input-bordered focus:bg-primary/10 bg-primary/5 focus:outline-0 focus:border-primary  text-primary w-full "
                    defaultValue={user?.email}
                    readOnly
                  />
                </div>

                <textarea
                  name="review"
                  required
                  className="textarea textarea-bordered  w-full  mt-4 h-40 focus:bg-primary/10 bg-primary/5  focus:outline-0 focus:border-primary focus:text-primary text-primary"
                  placeholder="Please give your honest review here for this service"
                ></textarea>
              </div>
              <div className="flex justify-center mb-2">
                <input
                  type="submit"
                  value="Add review"
                  className="btn btn-primary "
                />
              </div>
            </form>
          ) : (
            <div className="text-center mt-44">
              <h1 className="text-4xl font-bold text-primary">Please Login first</h1>
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
