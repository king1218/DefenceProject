import React from 'react';
import emailLogo from '../../../image/email.png'
import phoneLogo from '../../../image/phone.png'




const CandidatesDetailModal = ({User,SetUser}) => {
  const emailSendLink = `mailto:${User?.email}`;
  
const handleUser=()=>{
  SetUser('');
}

    return (
        <div>
         



{
    User &&
    <>
    <input type="checkbox" id="candidate-Detail-Modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label onClick={handleUser} htmlFor="candidate-Detail-Modal" className="btn btn-sm btn-primary bg-indigo-700 btn-circle absolute right-2 top-2">✕</label>
    <div className="card w-full ">

  <figure>
    <img className='w-44 h-44 my-2 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2' src={User?.photoUrl} alt="Candidate" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-indigo-700">{User?.Name}</h2>
    <p className='font-semibold flex items-center'><img className='w-5 h-5 mr-2 ' src={emailLogo} alt='emailLogo'/>{User?.email}</p>
    <p className='font-semibold flex items-center'><img className='w-5 h-5 mr-2 ' src={phoneLogo} alt='phoneLogo'/>Phone : {User?.Phone}</p>
    <p className='font-semibold text-indigo-700 my-3 text-justify'>Description</p>
    <p>{User?.Description}</p>
    <p className='font-semibold text-indigo-700 my-3 text-justify'>Experience</p>
    <p>{User?.Experience}</p>
    <div>
      <h1 className='text-indigo-700 font-bold'>Education</h1>
    <p className='font-semibold'>Student Id : {User?.Student_ID}</p>
    <p className='font-semibold'>Department : {User?.Department}</p>
    <p className='font-semibold'>Year OR Semester : {User?.Year_OR_Semester}</p>
    <p className='font-semibold'>University : {User?.University}</p>
    </div>
    <p className='font-semibold'>Location : {User?.location}</p>
    
    <div className="card-actions justify-center">
      <a href={emailSendLink} className="btn btn-primary">Send Email</a>
    </div>
  </div>
</div>
  </div>
</div></>
}
        </div>
    );
};

export default CandidatesDetailModal;