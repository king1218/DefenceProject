
import React from 'react';
import {  useNavigate } from 'react-router-dom';


const Jobs = ({job}) => {
  const {_id,LogoUrl,AuthorName,Type,Description,Category}=job;
  const navigate = useNavigate();
  const handleJobDetails=_id=>{
      navigate(`/findjob/${_id}`);
  }

    return (
        <div>
            

            <div   className="card card-compact cursor-pointer w-11/12  mx-auto shadow  p-4 pb-0 bg-indigo-100"> 
                   <div className="flex items-center justify-start">
                        <img className="w-12 h-12" src={LogoUrl} alt=""/>
                        <div className="ml-3"><span className="text-xl text-indigo-700 card-title f1">{AuthorName}<div className="badge badge-primary">NEW</div></span><p className="f1">{Type}</p>
            </div>
                </div>
                  <div className="">
                  <div className="mt-4">
                  <p className="text-orange-500 my-2  f1">{Category}</p>
                  <p className="text-sm ">{Description.slice(0,200)}</p>
                 
            </div>

    
    <div className="card-actions justify-between items-center mt-3 ">
  <div>
  <div class="rating rating-xs">
  <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
</div>

  </div>
  
      <button onClick={()=>handleJobDetails(_id)}  className="btn btn-primary btn-sm  " >Apply Now</button>

    </div>
    <button   onClick={()=>handleJobDetails(_id)} className='btn btn-link  mt-0 p-0 '>More</button>
  </div>
</div>

  </div>
    );
};

export default Jobs;