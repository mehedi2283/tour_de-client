import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "./../../context/AuthProvider/AuthProvider";
import MyAllReviews from "../MyAllReview/MyAllReview";
import toast from "react-hot-toast";
import useTitle from "../../hooks/useTitle";
import "./MyReviews.css";
import UpdateReviewWithModal from "../UpdateReviewWithModal/UpdateReviewWithModal";

const MyReviews = () => {
  useTitle("My Reviews");

  const { user, logOut } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  // const [openModal, setOpenModal] = useState(true);

  const [storedUpdateReviewData, setStoredUpdateReviewData] = useState({});

  const modalClicked = (id) => {
    // console.log('clicked.',id);
    // setOpenModal(true)

    fetch(`https://tour-de-server-mehedi2283.vercel.app/update_review/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setStoredUpdateReviewData(data);
      });
  };




 


  
  // console.log(storedUpdateReviewData);

  useEffect(() => {
    fetch(
      `https://tour-de-server-mehedi2283.vercel.app/my_reviews?email=${user.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("tourDE-token")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }

        return res.json();
      })
      .then((data) => {
        setReviews(data);
      })
      .catch((err) => console.log(err));
  }, [user?.email, logOut]);
  



 





  const handleDelete = (id) => {
    console.log(id);
    const proceed = window.confirm("Sure remove this review?");
    if (proceed) {
      fetch(`https://tour-de-server-mehedi2283.vercel.app/my_reviews/${id}`, {
        method: "DELETE",

        headers: {
          authorization: `Bearer ${localStorage.getItem("tourDE-token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("This review deleted successfully");
            const remainingReviews = reviews.filter((rvs) => rvs._id !== id);
            setReviews(remainingReviews);
          }
        });
    }
  };

  // const navigate = useNavigate();
  //   const location = useLocation();
  //   const from = location.state?.from?.pathname || `/my_reviews`
  //   useTitle('Update Review')

  // const storedReviewData = useLoaderData()
  // console.log(reviews);

  return (
    <>
      {reviews.length > 0 ? (
        <div className=" rounded-lg border border-primary/50 w-2/3 mx-auto p-3">
          <div className="overflow-x-auto w-full">
            <h3 className="text-center text-3xl font-bold my-4 text-primary/70 ">
              My total reviews -{" "}
              <span className="text-primary">{reviews.length}</span>
            </h3>
            <table className="table w-3/4 mx-auto ">
              <thead>
                <tr>
                  <th>Name & phone</th>
                  <th>message & Email</th>
                  <th>service Name</th>
                  <th>update</th>
                  <th>delete</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {reviews.map((review) => (
                  <MyAllReviews
                    handleDelete={handleDelete}
                    key={review._id}
                    review={review}
                    modalClicked={modalClicked}
                    // setOpenModal={setOpenModal}
                  ></MyAllReviews>
                ))}
              </tbody>
            </table>
          </div>
          
            <UpdateReviewWithModal
              storedUpdateReviewData={storedUpdateReviewData}
              setStoredUpdateReviewData={setStoredUpdateReviewData}
              logOut ={ logOut}
              setReviews={setReviews}
            ></UpdateReviewWithModal>
        
        </div>
      ) : (
        <div className="py-56">
          <h1 className=" text-9xl text-primary text-center">
            No review found.
          </h1>
        </div>
      )}
    </>
  );
};

export default MyReviews;
