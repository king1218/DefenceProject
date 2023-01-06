import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import ErrorPage from '../../ErrorPage/ErrorPage';
import Loading from '../../Loading/Loading';
import AddReviewModal from './AddReviewModal';
import Review from './Review';

const Reviews = () => {
    const [user] = useAuthState(auth)
    const {data:Reviews,isLoading,refetch,isFetching,error}=useQuery('users',()=>fetch('https://quick-solution-server.up.railway.app/reviews',
    {
        method: 'GET',
        headers: {
          'content-type':'appliction/json'
            
        }
    })
        .then(res=>res.json()));

    if(isLoading||isFetching){
        return <Loading></Loading>
    }
if(error){
  return <ErrorPage error={error}></ErrorPage>
}
    return (
        <div className=' lg:py-10 my-24 py-5  lg:my-44'>
            <div><div className="text-center  ">
                <div className="pre-headline mb-32-lg f1">FROM OUR USERS</div>
                     <h2 className='lg:text-4xl text-4xl text-indigo-700 f'>Here have some Reviews!</h2>
                </div>
               
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-20 '>
                {
                    Reviews?.map(review=><Review
                    key={review._id}
                    review={review}
                   
                    >

                    </Review>)
                }
            </div>
       {
        user
        &&   
        <div className='w-44 mx-auto'>
        <label htmlFor="AddReviewModal" className="  text-center my-4 btn btn-primary bg-indigo-700  hover:-translate-y-1  hover:scale-110 transition duration-20">Add Review</label>
        </div>
       }
            <AddReviewModal  refetch={refetch}></AddReviewModal>
        </div>
    );
};

export default Reviews;