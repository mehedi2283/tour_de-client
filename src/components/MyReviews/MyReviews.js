import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from './../../context/AuthProvider/AuthProvider';
import MyAllReviews from '../MyAllReview/MyAllReview';
import toast from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';

const MyReviews = () => {
  useTitle('My Reviews')

    const {user} = useContext(AuthContext)
    console.log(user);

    const [reviews,setReviews]= useState([])
    console.log(typeof(reviews));
    useEffect(()=>{
        fetch(`http://localhost:5000/my_reviews?email=${user.email}`)
        
            .then((res) => res.json())
            .then((data) => {
                setReviews(data)
            })
            .catch((err) => console.log(err));
    },[user?.email])
    const handleDelete = id =>{
        const proceed = window.confirm('Sure remove this review?')
        if (proceed){
            fetch(`http://localhost:5000/my_reviews/${id}`,{
            method: 'DELETE'
        })
        .then((res) => res.json())
            .then((data) => {
                if(data.deletedCount > 0){
                    toast.success('This review deleted successfully');
                    const remainingReviews = reviews.filter(rvs => rvs._id !== id)
                    setReviews(remainingReviews)
                }
            })
        }
    }
    



    return (
        <>
        {reviews.length>0 ? (
              <div className=" rounded-lg border p-3">
              <div className="overflow-x-auto w-full">
              <h3 className="text-center text-3xl font-bold my-4 ">
                   My total reviews - {reviews.length}
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
                      <MyAllReviews  handleDelete={handleDelete} key={review._id} review={review}></MyAllReviews>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            ) : (
             <div className='py-56'>
                <h1 className=' text-9xl text-center'>No review found.</h1>
             </div>
            )}
       
        
        </>
    );
};

export default MyReviews;