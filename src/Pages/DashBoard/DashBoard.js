import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../Loading/Loading'

const Dashbord = () => {
  const [user, loading] = useAuthState(auth);
  const [admin,adminLoading] =useAdmin(user);

  if(loading|| adminLoading){
    return <Loading></Loading>
}
    return (
        <div className='max-w-7xl mx-auto mt-5'>
        <div className="drawer drawer-mobile">
        <input id="Dashboard-drawer" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content flex flex-col  rounded-r-2xl ">

          <div className="btn-group mt-4 w-11/12 mx-auto lg:hidden">
              {/* <!-- Sidebar content here --> */}
            <Link className='btn btn-primary' to='/dashboard'>Profile</Link>
            <Link className='btn' to='/dashboard/appliedJobs'>Applies</Link>
            <Link className='btn' to='/dashboard/postedJobs'>Posts</Link>
            
          </div>
          <div className="btn-group mt-1  w-11/12 mx-auto lg:hidden">
          <Link className='btn' to='/dashboard/allUsers'>All Users</Link>
            <Link className='btn' to='/dashboard/allJobs'>All Jobs</Link>
            <Link className='btn' to='/dashboard/allReviews'>All Reviews</Link>
          </div>

              <Outlet></Outlet>
      
        </div> 

      <div className="drawer-side ">
            <label htmlFor="Dashboard-drawer" className="drawer-overlay "></label> 
            <ul className="f1 menu p-4 overflow-y-auto h-96 w-40 rounded-l-2xl bg-indigo-700 text-white">
              {/* <!-- Sidebar content here --> */}
              <li><Link to='/dashboard'>Profile</Link></li>
              <li><Link to='/dashboard/appliedJobs'>Applies</Link></li>
              <li><Link to='/dashboard/postedJobs'>Posts</Link></li>
             
           
            {

              admin &&
                <>
                <li><Link to='/dashboard/allUsers'>All Users</Link></li>
                <li><Link to='/dashboard/allJobs'>All Jobs</Link></li>
                <li>  <Link  to='/dashboard/allReviews'>All Reviews</Link></li>
                </>
            }
            </ul>
      </div>
    </div>
  </div>
    );
};

export default Dashbord;