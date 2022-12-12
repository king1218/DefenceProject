import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Loading/Loading';
import {signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';

const AllReviews = () => {
    const navigate = useNavigate();
    const {data:Reviews,isLoading,refetch}=useQuery('reviews',()=>fetch('https://quick-solution.vercel.app/reviews',
    {
        method: 'GET',
        headers: {
            'content-type':'appliction/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res=>res.json()));

    if(isLoading){
        return <Loading></Loading>
    }


    const handleDelete = (id) => {
        fetch(`https://quick-solution.vercel.app/reviews/${id}`, {
            method: 'DELETE',
            headers: {
              'content-type':'appliction/json',
              authorization: `Bearer ${localStorage.getItem('accessToken')}`
          }
        })
            .then(res => 
              {
                if(res.status === 401 || res.status===403){
                    signOut(auth);
                    navigate('/')
                }
                return res.json()
            })
            
            .then(data => {
                
                if (data.deletedCount) {
                    toast.success(`Review is deleted!!`)
                    refetch();
                }
            })
}

    return (
        <div className="overflow-x-auto w-full">
            {
                Reviews?.map(Review =>
                    <div key={Review._id} className="card lg:max-w-lg bg-base-100 md:shadow-xl md:shadow-indigo-100 mx-auto m-3">
                    <div className="card-body ">
                   
                    <p>{Review?.reviewtext}</p>
                    <div className='flex justify-between items-center lg:px-4 mt-4'>
                    <div className="avatar ">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={Review?.img} alt={Review?.name} />
                    </div>
                    </div>
                    <div className='sm:ml-2'>
                    <h2 className="text-xl ">{Review?.name}</h2>
                    <p className='text-primary'>{Review?.location}</p>
                    </div>
                    </div>
                    <button onClick={()=>handleDelete(Review._id)} className='btn btn-sm w-2/12 mx-auto btn-primary bg-indigo-700 mt-4'>Delete</button>
                    </div>
                  
           </div>
                )
            }
      </div>
    );
};

export default AllReviews;