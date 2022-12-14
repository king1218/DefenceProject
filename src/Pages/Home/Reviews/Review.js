import React from 'react';



const Reviews = ({review}) => {
  
    return (
        <div className="card lg:max-w-lg bg-base-100 md:shadow-xl md:shadow-indigo-100 mx-auto m-3">
                <div className="card-body ">
               
                <p>{review?.reviewtext}</p>
                <div className='flex justify-between items-center lg:px-4 mt-4'>
                <div className="avatar ">
                <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={review?.img} alt={review?.name} />
                </div>
                </div>
                <div className='sm:ml-2'>
                <h2 className="text-xl ">{review?.name}</h2>
                <p className='text-primary'>{review?.location}</p>
                </div>
                </div>
                </div>
              
       </div>
    );
};

export default Reviews;