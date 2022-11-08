import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Review = ({review}) => {
    // const {user} = useContext(AuthContext)
    // console.log(user)
    return (
        <div>
            {review.customer}
        </div>
    );
};

export default Review;