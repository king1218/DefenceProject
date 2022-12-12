import React from 'react';
import {  useQuery } from 'react-query';
import Loading from '../../Loading/Loading';
import UserRaw from './UserRow';


const AllUsers = () => {
    const {data:Users,isLoading,refetch}=useQuery('users',()=>fetch('https://quick-solution.vercel.app/users',
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

    return (
        <div className='overflow-x-auto w-full '>
            <div className="">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Users</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
        {
            Users?.map((User,index)=>
            
               <UserRaw
               key={User?._id}
               User={User}
               index={index}
               refetch={refetch}
               >
                
               </UserRaw>

            )
        }
      
     
    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;