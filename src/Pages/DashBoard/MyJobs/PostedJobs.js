import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

import Loading from '../../Loading/Loading';
import Candidates from './Candidates';
import {signOut } from 'firebase/auth';


import { toast } from 'react-toastify';

const PostedJobs = () => {
  const [candidates,SetCandidates] = useState();


  
  const navigate = useNavigate();
    const [user] = useAuthState(auth);
   const email = user.email;
    const {data: Jobs,isLoading,isFetching,refetch} = useQuery(['jobs',email], () => fetch(`https://quick-solution-server.up.railway.app/myjobs/${email}`,
    {
      
        method: 'GET',
        headers: {
            'content-type':'appliction/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
   
    
    .then(res=>res.json())
)
if(isLoading||isFetching){
    return <Loading></Loading>
} 
if(Jobs.length===0){
  navigate('/dashboard/addJobNotification');
  
}


const Cadidates = (Jobid)=>{

        
    fetch(`https://quick-solution-server.up.railway.app/candidate/${Jobid}`,{

    method:'GET',
    headers:{
        'content-type':'appliction/json',
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
    })
    .then(res=>
      {
        if(res.status === 401 || res.status===403){
          signOut(auth);
          navigate('/')
      }
        return res.json()
      })
    .then(candidates=>{
        SetCandidates(candidates);
      
        
    })

  

}

const handleDelete = (Jobid) => {
  fetch(`https://quick-solution-server.up.railway.app/deletejob/${Jobid}`, {
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
              toast.success(`Your job is deleted`)
              refetch();
          }
      })
}


    return (
        <div className="overflow-x-auto w-full">
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
    Jobs?.map(Job=>
        <tr key={Job._id}>

        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={Job?.LogoUrl} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{Job?.AuthorName}</div>
              <div className="text-sm opacity-50">{Job?.Post}</div>
            </div>
          </div>
        </td>
        <td>
          {Job?.Type}
          <br/>
          <span className="badge badge-ghost badge-sm">{Job?.Category}</span>
        </td>
        <td>{Job?.Published_On}</td>
        <th>
          
          <button onClick={()=>handleDelete(Job?._id)} className="btn btn-primary btn-xs">Delete</button>
          <label onClick={()=>Cadidates(Job?._id)} className="btn btn-primary btn-xs mx-4">Candidates</label>
          
          
        </th>
       
      </tr>
      
      )
      
   }
 </tbody>
   
    
  </table>

<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-24 mx-5 '>
{
    candidates?.map(candidate=>
    <Candidates 
    key={candidate._id}
    candidate={candidate}
    ></Candidates>)
    }

</div>
</div>
    );
};

export default PostedJobs;