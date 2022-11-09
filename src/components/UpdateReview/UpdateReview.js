import React, {  useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';


const UpdateReview = ({review}) => {
    
    const storedReviewData = useLoaderData()
    const [updateReviewData,setUpdateReviewData]= useState(storedReviewData)

    const handleUpdate = event=> {
        event.preventDefault();
        console.log(updateReviewData._id)
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
    

    // useEffect(()=>{
    //     fetch(`http://localhost:5000/my_reviews?_id=${user.email}`)
        
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setReviews(data)
    //         })
    //         .catch((err) => console.log(err));
    // },[user?.email])

    

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