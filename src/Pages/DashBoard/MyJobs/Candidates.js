import React, {  useState } from 'react';


import CandidatesDetailModal from './CandidatesDetailModal';
import emailLogo from '../../../image/email.png'
import phoneLogo from '../../../image/phone.png'

const Candidate = ({candidate}) => {
const [User,SetUser] = useState();


const CandidateDetails=(candidate)=>{
SetUser(candidate?.Information?.User)

}
const emailSendLink = `mailto:${candidate?.email}`;

    return (
        <div className='my-4 bg-slate-100 rounded-xl'>
    
<div className="card ">
  <div className="card-body p-4">
    <div className="card-actions   justify-start items-center">
    
    <img className="w-16 h-16 rounded-full" src={candidate?.Information?.User?.photoUrl} alt='User' />
    
  
  <p className='font-semibold'>{candidate?.Information?.User?.Name}</p>
 
    </div>
    <a href={emailSendLink} title='Send Email?' className='text-indigo-700 font-semibold flex items-center'><img className='w-5 h-5 mr-2 ' src={emailLogo} alt='emailLogo'/>{candidate?.email}</a>
    <p title='Call?' className='flex items-center text-indigo-700 '><img className='w-5 h-5 mr-2 ' src={phoneLogo} alt='phonelogo'></img>{candidate?.Information?.User?.Phone}</p>
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