import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import ErrorPage from '../../ErrorPage/ErrorPage';
import Loading from '../../Loading/Loading';
import {signOut } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import AppliedJobNotification from './AppliedJobNotification';

const AppliedJobs = () => {
    const [user] =useAuthState(auth)
    const navigate = useNavigate();
    const {data:AppliedJobs,isLoading,refetch,isFetching,error}=useQuery('Jobs',()=>fetch(`http://localhost:5000/myApplied/${user?.email}`,
    {
        method: 'GET',
        headers: {
          'content-type':'appliction/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res=>{
            if(res.status===403||res.status===403){
                signOut(auth)
                localStorage.removeItem('accessToken');
                navigate('/')
                
            }
            return  res.json()
        }));

    if(isLoading||isFetching){
        return <Loading></Loading>
    }

    
if(error){
  return <ErrorPage error={error}></ErrorPage>
}
if(AppliedJobs?.length ===0){
 return <AppliedJobNotification></AppliedJobNotification>
}
const RemoveApply = (Jobid)=>{
    fetch(`http://localhost:5000/myApplied/${Jobid}`, {
        method: 'DELETE',
        headers: {
          'content-type':'appliction/json',
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
        .then(res => {
            if(res.status === 401 || res.status===403){
                signOut(auth);
                navigate('/')
            }
            return res.json()
        })
        .then(data => {
            
            if (data.deletedCount) {
                toast.success(`${user?.displayName} You Removed this apply!!`)
                refetch();
            }
        })
}

    return (
        <div className="overflow-x-auto w-full my-10">
          <h1 className='f text-3xl text-center my-5'>My <span className='text-indigo-700 '>Applies</span></h1>
        <table className="table w-11/12 mx-auto">
          {/* <!-- head --> */}
          <thead>
            <tr className='bg-indigo-50'>
            
              <th>Name</th>
              <th>Job</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
      
      
         {
          AppliedJobs?.map(AppliedJob=>
              <tr key={AppliedJob?._id}>
      
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={AppliedJob?.Information?.Job?.LogoUrl} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{AppliedJob?.Information?.Job?.AuthorName}</div>
                    <div className="text-sm opacity-50">{AppliedJob?.Information?.Job?.Post}</div>
                  </div>
                </div>
              </td>
              <td>
                {AppliedJob?.Information?.Job?.Type}
                <br/>
                <span className="badge badge-ghost badge-sm">{AppliedJob?.Information?.Job?.Category}</span>
              </td>
              <td>{AppliedJob?.Information?.Job?.Published_On}</td>
              <th>
                
                <label onClick={()=>RemoveApply(AppliedJob?.Jobid)}  className="btn btn-primary btn-xs">Remove Apply</label>
             
                
              </th>
             
            </tr>
             
            )
            
         }
       </tbody>
         
          
        </table>
      <div className='flex justify-center items-center my-10'>
      <Link to='/findjob' className="btn btn-primary bg-indigo-700 ">Apply More </Link>
      </div>
      </div>
    );
};

export default AppliedJobs;