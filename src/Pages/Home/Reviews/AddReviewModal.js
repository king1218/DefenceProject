import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import {signOut } from 'firebase/auth';
import auth from '../../../firebase.init';

const AddReviewModal = ({refetch}) => {
    const [user] = useAuthState(auth);
    const navigate=useNavigate();
    const { register,reset,formState: { errors }, handleSubmit } = useForm();
    const onSubmit =async data => {
    
     const Review ={
        "name": user?.displayName,
        "img" : user?.photoURL,
        "email":user?.email,
        "location":data.location,
        "reviewtext":data.review

     }
         
                // add Category:
               fetch(`https://quick-solution.vercel.app/reviews`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}` 
                        
                    },
                    body: JSON.stringify(Review)
                })
                .then(res =>{
                    if(res.status===401||res.status===403){
                        signOut(auth)
                        localStorage.removeItem('accessToken');
                        navigate('/')
                        
                    }
                     return  res.json()
                })
                .then(result =>{
                    console.log(result)
                   if(result.acknowledged===true){
                    toast.success(`${user.displayName} you have added a Review!`);
                    navigate('/');
                    refetch();
                    reset();
                    
                   
  
                   }
               
                })
            }
        
  
    return (
        <div>
            <input type="checkbox" id="AddReviewModal" className="modal-toggle" />
           <div className='modal modal-bottom sm:modal-middle'>
          
           <div className='modal-box relative'>
           <h1 className='text-indigo-700 my-4 f text-3xl text-center'>Add Review</h1>
           <label htmlFor="AddReviewModal" className="btn btn-primary bg-indigo-700 btn-sm btn-circle absolute right-2 top-2">✕</label>
           <form  onSubmit={handleSubmit(onSubmit)} >
         

            <div >
      
              <textarea
               type="textarea"
               placeholder='Your Review'
               
          {...register("review", {
                   required: {
                  value: true,
                  message: 'Review is Required'
              }
          })}
          className="textarea  textarea-primary w-full "
        />
        <label className="label">
        {errors.review?.type === 'required' && <span className="label-text-alt text-red-500">{errors.review?.message}</span>}
           </label>
             </div>
            <div >
      
              <input
               type="text"
               placeholder='Your Location'
               
          {...register("location", {
                   required: {
                  value: true,
                  message: 'Location is Required'
              }
          })}
          className="  input input-bordered input-primary w-full "
        />
        <label className="label">
        {errors.location?.type === 'required' && <span className="label-text-alt text-red-500">{errors.location?.message}</span>}
           </label>
             </div>
             <div className="modal-action items-center">
             <input htmlFor='AddReviewModal'   className='btn btn-primary  bg-indigo-700 w-full  text-white' type="submit" value="Post" />
             </div>
             </form>
      
           </div>
           </div>
        </div>
    );
};

export default AddReviewModal;