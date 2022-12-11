import React from 'react';




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
    <img className='w-44 h-44 ' src={User?.photoUrl} alt="Candidate" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-indigo-700">{User?.Name}</h2>
    <p className='font-semibold'>{User?.email}</p>
    <p className='font-semibold'>{User?.Phone}</p>
    <p>{User?.Description}</p>
    <p>{User?.Experience}</p>
    <div>
      <h1 className='text-indigo-700 font-bold'>Education</h1>
    <p>{User?.Student_ID}</p>
    <p>{User?.Department}</p>
    <p>{User?.Year_OR_Semester}</p>
    <p>{User?.University}</p>
    </div>
    <p className='font-semibold'>Location: {User?.location}</p>
    
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