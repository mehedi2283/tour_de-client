import React, {   useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';


const UpdateReview = () => {
 

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || `/my_reviews`
  useTitle('Update Review')
    
    const storedReviewData = useLoaderData()
    const [updateReviewData,setUpdateReviewData]= useState(storedReviewData)

    const handleUpdate = event=> {
        event.preventDefault();
        
        fetch(`http://localhost:5000/update_review/${storedReviewData._id}`,{
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateReviewData)

        })
        .then((res) => res.json())
            .then((data) => {
                if(data.modifiedCount > 0){


                   navigate(from, { replace: true });
                  
                    toast.success('Review updated')
                    
                    
                }
            })
           


    }
    const handleInputChange =event =>{
        const field = event.target.name
        const value = event.target.value
        const newReview = {...updateReviewData}
        newReview[field] =value
        setUpdateReviewData(newReview)

    }
    

    

    

    return (
        <div>
            <form onSubmit={handleUpdate}>
            <h3 className="text-center text-3xl font-bold my-4 ">
              Update your review
            </h3>
            <div className="my-auto w-10/12 mx-auto">
              <div className="grid grid-cols-1 my-auto  gap-4 w-full">
                <input
                onChange={handleInputChange}
                  
                  name="customer"
                  type="text"
                  placeholder={"First Name"}
                  className="input input-bordered w-full "
                  defaultValue={storedReviewData.customer}
                />
                
                <input
                  onChange={handleInputChange}
                  name="phone"
                  type="text"
                  placeholder="Phone Number"
                  className="input input-bordered w-full "
                  defaultValue={storedReviewData.phone}
                />
                <input
                onChange={handleInputChange}
                  name="email"
                  type="text"
                  placeholder="Email"
                  className="input input-bordered  w-full"
                  defaultValue={storedReviewData.email}
                  readOnly
                />
              </div>

              <textarea
                name="message"
                onChange={handleInputChange}
                
                className="textarea textarea-bordered w-full  mt-4 h-40"
                placeholder="Update details here for this review"
                defaultValue={storedReviewData.message}
              ></textarea>
            </div>
            <div className="flex justify-center">
              <input
                type="submit"
                value="Update review"
                className="btn btn-primary"
              />
            </div>
          </form>
        </div>
    );
};

export default UpdateReview;