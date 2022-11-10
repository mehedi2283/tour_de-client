import React from "react";


const Review = ({ review }) => {
  const { customer, email, message, serviceName, img,phone } = review;
  // const {user} = useContext(AuthContext)
  // console.log(user)
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
        
      </tr>

      {/* <hr /> */}
    </>
  );
};

export default Review;
