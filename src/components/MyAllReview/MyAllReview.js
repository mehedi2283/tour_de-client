import React from "react";
import { IoMdTrash, IoMdSave } from "react-icons/io";
import { Link } from "react-router-dom";
// import UpdateReviewWithModal from "../UpdateReviewWithModal/UpdateReviewWithModal";
// import UpdateReviewWithModal from './../UpdateReviewWithModal/UpdateReviewWithModal';

const MyAllReviews = ({ review, handleDelete, modalClicked }) => {
  const { customer, email, message, serviceName, img, phone, _id } = review;

  return (
    <>
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={img} alt="" />
              </div>
            </div>
            <div>
              <div className="font-bold ">{customer}</div>
              <div className="text-sm  badge badge-primary badge-sm">{phone}</div>
            </div>
          </div>
        </td>
        <td>
          <span className="font-medium">{message}</span>
          <br />
          <span className="badge badge-primary badge-sm">{email}</span>
        </td>
        <td>{serviceName}</td>
        <th>
          <Link to={`/update_review/${_id}`}>
            <button className="btn bg-green-600 border-0 text-white hover:bg-green-800">
              <IoMdSave className="text-3xl"></IoMdSave>
            </button>
          </Link>
        </th>
        <th>
          <button
            onClick={() => handleDelete(_id)}
            className="btn bg-red-600 border-0 hover:text-red-900 hover:bg-red-800"
          >
            <IoMdTrash className="text-3xl text-white "></IoMdTrash>
          </button>
        </th>

        {/* The button to open modal */}
       <th>
       <label htmlFor="my-modal-3" onClick={ () => modalClicked(_id) } className="btn bg-green-600 border-0  text-white hover:bg-green-800">
          Update with modal
        </label>
       </th>
       
      </tr>
      {/* <UpdateReviewWithModal storedUpdateReviewData={storedUpdateReviewData}  ></UpdateReviewWithModal> */}
      {/* <hr /> */}
    </>
  );
};

export default MyAllReviews;
