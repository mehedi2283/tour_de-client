import React, {  } from "react";
import { IoMdTrash,IoMdSave } from "react-icons/io";
import { Link } from "react-router-dom";


const MyAllReviews = ({ review,handleDelete,handleUpdate }) => {
  const { customer, email, message, serviceName, img,phone,_id } = review;
  
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
              <div className="font-bold">{customer}</div>
              <div className="text-sm opacity-50">{phone}</div>
            </div>
          </div>
        </td>
        <td>
          {message}
          <br/>
          <span className="badge badge-ghost badge-sm">{email}</span>
        </td>
        <td>{serviceName}</td>
        <th>
          <Link review={review} handleUpdate={handleUpdate} to={`/update_review/${_id}`}><button  className="btn bg-green-600 border-0 hover:text-green-900 hover:bg-green-700"><IoMdSave className="text-3xl"></IoMdSave></button></Link>
        </th>
        <th>
          <button onClick={()=>handleDelete(_id)} className="btn bg-red-600 border-0 hover:text-red-900 hover:bg-red-700"><IoMdTrash className="text-3xl "></IoMdTrash></button>
        </th>
        
        
      </tr>

      {/* <hr /> */}
    </>
  );
};

export default MyAllReviews;
