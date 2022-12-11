import React from 'react';
import About3 from '../../image/about3.png'

const Vision = () => {
    return (
        <div>
        <div className='lg:my-32 my-24'>
<div className="hero  my-10 lg:my-32 ">
  <div className="hero-content w-full flex-col lg:flex-row-reverse justify-between items-center py-4">

     <div >
      <div className="lg:flex-1">
        <img className=" md:max-w-sm xl:max-w-lg  rounded-lg shadow-2xl shadow-indigo-100" src={About3} alt="" />
        
      </div>
     </div>
     <div className="  w-full max-w-md  ">
           <div className='' >
         <div>
            <div className="">
            <h2  className="f mb-5  lg:text-5xl text-3xl   tracking-tight text-gray-900 sm:text-4xl sm:leading-none">Our <span className="inline-block text-indigo-700">
            Vision
            </span></h2>
            <p>
              There's this notion that to grow a business, you have to be ruthless. But we know there's a better way to grow. One where what's good for the bottom line is also good for customers. We believe businesses can grow with a conscience, and succeed with a soul — and that they can do it with inbound. That's why we've created an ecosystem uniting software, education, and community to help businesses grow better every day.
            </p>
    </div>
          
  </div>
 </div>
</div>
   </div>
     </div>
</div>
</div>
    );
};

export default Vision;