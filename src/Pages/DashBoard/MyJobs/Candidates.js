import React, {  useState } from 'react';


import CandidatesDetailModal from './CandidatesDetailModal';

const Candidate = ({candidate}) => {
const [User,SetUser] = useState();


const CandidateDetails=(candidate)=>{
SetUser(candidate?.Information?.User)

}
const emailSendLink = `mailto:${candidate?.email}`;

    return (
        <div className='my-4'>
    
<div className="card  bg-base-100">
  <div className="card-body p-4">
    <div className="card-actions  justify-start items-center">
    
    <img className="w-10 rounded-full" src={candidate?.Information?.User?.photoUrl} alt='User' />
    
  
  <p className='font-semibold'>{candidate?.Information?.User?.Name}</p>
 
    </div>
    <a href={emailSendLink} title='Send Email?' className='text-indigo-700 font-semibold'>{candidate?.email}</a>
    <p title='Call?' className=''>{candidate?.Information?.User?.Phone}</p>
      <label onClick={()=>CandidateDetails(candidate)}  htmlFor="candidate-Detail-Modal" className="btn btn-primary btn-sm w-3/12 my-3">Details</label>
    
  </div>
 
</div>
{
   
   <CandidatesDetailModal SetUser={SetUser} User={User} ></CandidatesDetailModal>
  }
        </div>
    );
};

export default Candidate;