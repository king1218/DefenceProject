
import React from 'react';
import { useQuery } from 'react-query';
import ErrorPage from '../../ErrorPage/ErrorPage';
import Loading from '../../Loading/Loading';
import DeleteJobModal from '../MyJobs/DeleteJobModal';

const AllJobs = () => {
    const {data:Jobs,isLoading,refetch,isFetching,error}=useQuery('users',()=>fetch('http://localhost:5000/jobs',
    {
        method: 'GET',
        headers: {
          'content-type':'appliction/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
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
                    <p className="font-bold">{Job?.AuthorName}</p>
                    <p className="text-sm opacity-50">{Job?.Post}</p>
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
                
                <label htmlFor="Delete-Job-Modal" className="btn btn-primary btn-xs">Delete</label>
             
                
              </th>
              <DeleteJobModal Job={Job} refetch={refetch}></DeleteJobModal>
            </tr>
             
            )
            
         }
       </tbody>
         
          
        </table>
      
      </div>
    );
};

export default AllJobs;