import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const AddServices = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const place_name = form.place_name.value;
    const ratings = form.ratings.value;
    const price = form.price.value;
    const img = form.img.value;
    
    const details = form.details.value;

    const service = {
      place_name: place_name,
      ratings:ratings,
      price:price,
      img: img,
      details: details,
    };

    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
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


        //   fetch(`http://localhost:5000/reviews?service=${_id}`)
        //     .then((res) => res.json())
        //     .then((data) => {
        //       setReviews(data);
        //     })
        //     .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="col-span-2 rounded-lg border">
      {user?.uid ? (
        <form onSubmit={handleSubmit}>
          <h3 className="text-center text-3xl font-bold my-4 ">
            Add a service
          </h3>
          <div className="my-auto w-10/12 mx-auto">
            <div className="grid grid-cols-1 my-auto  gap-4 w-full">
              <input
                required
                name="place_name"
                type="text"
                placeholder="Service Name"
                className="input input-bordered w-full "
              />
              <input
                required
                name="ratings"
                type="text"
                placeholder="ratings"
                className="input input-bordered w-full"
              />
              <input
                required
                name="price"
                type="text"
                placeholder="Price"
                className="input input-bordered w-full "
              />
              <input
                name="img"
                type="text"
                placeholder="img"
                className="input input-bordered  w-full"
                
              />
            </div>

            <textarea
              name="details"
              required
              className="textarea textarea-bordered w-full  mt-4 h-40"
              placeholder="Write details about this service."
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
  );
};

export default AddServices;
