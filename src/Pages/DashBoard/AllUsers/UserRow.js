import React from 'react';
import { toast } from 'react-toastify';

import auth from '../../../firebase.init';
import {signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


const UserRaw = ({User,index,refetch }) => {

  const navigate = useNavigate();
  const {email,role}=User;
  
  const makeAdmin=()=>{
    fetch(`https://quick-solution.vercel.app/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }

        })
        .then(res => {
                    
          if (res.status === 401 || res.status === 403) {
              toast.error(`${email} is not an admin!`);
          }
          else{
            toast.success(`Succesfully made as admin ${email}`);

          }
          return res.json()
      })
        
          
          
        .then(data =>{
          refetch();
          
          
        })
}


const handleDeleteUser = (email) => {
  fetch(`https://quick-solution.vercel.app/user/${email}`, {
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
              toast.success(`User is deleted!!`)
              refetch();
          }
      })
}
    return (
        
             <tr>
                <th>{index+1}</th>
                <td>{User?.email}</td>
                <td>{!role&&<button onClick={makeAdmin} className='btn btn-xs btn-primary bg-indigo-700'>Make Admin</button>}</td>
                <td><button  onClick={()=>handleDeleteUser(User?.email)} className='btn btn-xs  btn-primary bg-indigo-700'>Remove user</button></td>
              </tr>
        
    );
};

export default UserRaw;