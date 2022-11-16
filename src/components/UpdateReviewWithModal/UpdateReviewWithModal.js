import React from 'react';
import { toast } from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
// import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';

const UpdateReviewWithModal = ( {storedUpdateReviewData,setStoredUpdateReviewData,modalUpdateButton,setReviews,logOut}) => {


  const { customer,email,message,phone} = storedUpdateReviewData


  // console.log(storedUpdateReviewData);

  //   const [newUpdateReviewData,setNewUpdateReviewData]= useState(storedUpdateReviewData)

  //   console.log(newUpdateReviewData);



    const handleUpdate = event=> {
        event.preventDefault();
        
        fetch(`https://tour-de-server-mehedi2283.vercel.app/update_review/${storedUpdateReviewData._id}`,{
            method: 'PUT',
            headers:{
                'content-type': 'application/json',
                authorization:`Bearer ${localStorage.getItem('tourDE-token')}`
                    
                
            },
            body: JSON.stringify(storedUpdateReviewData)

        })
        .then((res) => res.json())
            .then((data) => {
                if(data.modifiedCount > 0){


                //    navigate(from, { replace: true });
                  
                    toast.success('Review updated')
                    event.target.reset();

                    fetch(
                      `https://tour-de-server-mehedi2283.vercel.app/my_reviews?email=${email}`,
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
                  
                
                      // console.log(setReviews)
                    
                    
                }
            })
           


    }



    const handleInputChange =event =>{
        const field = event.target.name
        const value = event.target.value
        const newReview = {...storedUpdateReviewData}
        newReview[field] =value
        setStoredUpdateReviewData(newReview)

    }



    return (
        <>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <div className=' mx-auto'>
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
                  className="input input-bordered w-full focus:bg-primary/10 focus:outline-0 focus:text-primary focus:border-primary "
                  defaultValue={customer}
                />
                
                <input
                  onChange={handleInputChange}
                  name="phone"
                  type="text"
                  placeholder="Phone Number"
                  className="input input-bordered w-full focus:bg-primary/10 focus:outline-0 focus:text-primary focus:border-primary"
                  defaultValue={phone}
                />
                <input
                onChange={handleInputChange}
                  name="email"
                  type="text"
                  placeholder="Email"
                  className="input input-bordered text-primary border-primary  w-full bg-primary/5 focus:outline-0 "
                  defaultValue={email}
                  readOnly
                />
              </div>

              <textarea
                name="message"
                onChange={handleInputChange}
                
                className="textarea textarea-bordered w-full  mt-4 h-40 focus:bg-primary/10 focus:outline-0 focus:text-primary focus:border-primary"
                placeholder="Update details here for this review"
                defaultValue={message}
              ></textarea>
            </div>
            <div  className="flex justify-center">
              <button
                type="submit"
                className='mt-4'
               
                
              ><label className='font-black w-60 h-8 m-0 cursor-pointer flex justify-center items-center btn btn-primary' htmlFor="my-modal-3">Update </label></button>
            </div>
          </form>
        </div>
  </div>
</div>
        </>
    );
};

export default UpdateReviewWithModal;