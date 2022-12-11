import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const AppliedJobNotification = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <div className='h-screen flex justify-center items-center ' >
    <div className="card  bg-base-100 shadow-xl ">

  <div className="card-body">
    <h1 className='text-2xl text-center f1'>{`${user.displayName} didn't applied in any job!`}</h1>
    <h2 className=" text-center f1">Please apply to jobs</h2>
   
    <div className="card-actions justify-center">
    <Link to='/findjob'  className='btn btn-primary bg-indigo-700 text-white w-full my-10'>Apply Job
        </Link>
    </div>
  </div> 
  
</div>
        </div>
           
        </div>
    );
};

export default AppliedJobNotification;