import React from 'react';
import studentjob from '../../image/StudentJob.png'
import security from '../../image/security.png'
import thrid from '../../image/Third.png'
import Lowcost from '../../image/Lowcost.png'
import find from '../../image/Find.png'
const WhatWeOffer = () => {
    return (
        <div>
           
<section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
  <div className="container mx-auto">
    <div className="-mx-4 flex flex-wrap">
      <div className="w-full px-4">
        <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
          <span className="text-primary mb-2 block text-lg font-semibold f1">
            Our Services
          </span>
          <h2
            className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px] f"
          >
            What We Offer
          </h2>
          <p className="text-body-color text-base">
           There are some very extraordinary services available in our website. You can expolore and find your job.
          </p>
        </div>
      </div>
    </div>
    <div className="-mx-4 flex flex-wrap">
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div
          className="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10"
        >
          <div
            className=" mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl"
          >
         <img src={studentjob} alt="Student Job" />
          </div>
          <h4 className="text-dark mb-3 text-xl font-semibold f1">
           Students Job
          </h4>
          <p className="text-body-color">
          Students can find here suitable jobs acording to their skills.
          </p>
        </div>
      </div>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div
          className="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10"
        >
          <div
            className=" mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl"
          >
           <img src={Lowcost} alt="" />
          </div>
          <h4 className="text-dark mb-3 text-xl font-semibold f1">
          Low Cost
          </h4>
          <p className="text-body-color">
            Our maximum workers are students. They charged minimum cost according their job.
          </p>
        </div>
      </div>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div
          className="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10"
        >
          <div
            className=" mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl"
          >
       <img src={find} alt="" />
          </div>
          <h4 className="text-dark mb-3 text-xl font-semibold f1">Easy To Find</h4>
          <p className="text-body-color">
            You can easy to find out your job. If you are a student come and earn.
          </p>
        </div>
      </div>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div
          className="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10"
        >
          <div
            className=" mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl"
          >
            <img src={thrid} alt="" />
          </div>
          <h4 className="text-dark mb-3 text-xl font-semibold">No Third Party</h4>
          <p className="text-body-color">
            No third party here. You can connect with your customer or candidates.
          </p>
        </div>
      </div>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div
          className="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10"
        >
          <div
            className=" mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl"
          >
          <img src={security} alt="" />
          </div>
          <h4 className="text-dark mb-3 text-xl font-semibold">
          Security and  Privacy
          </h4>
          <p className="text-body-color">
          This website is 100% secure. We can share your personal information safely  
          </p>
        </div>
      </div>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div
          className="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10"
        >
          <div
            className="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl"
          >
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.04684 15.5859C4.2109 15.5859 4.37497 15.5859 4.48434 15.5313L10.5547 13.3984C11.0468 13.2344 11.3203 12.6875 11.1562 12.1953C10.9922 11.7031 10.4453 11.4297 9.95309 11.5938L6.28903 12.9063C8.09372 7.92969 12.8515 4.53906 18.375 4.53906C24.2265 4.53906 29.3672 8.42188 30.789 14.0547C30.8984 14.5469 31.4453 14.875 31.9375 14.7656C32.4297 14.6563 32.7578 14.1094 32.6484 13.6172C31.0078 7.16406 25.1015 2.67969 18.375 2.67969C11.8125 2.67969 6.12497 6.89063 4.26559 13.0156L2.57028 8.25781C2.40622 7.76563 1.85934 7.49219 1.36715 7.65625C0.874967 7.82031 0.60153 8.36719 0.765592 8.85938L2.84372 14.8203C3.00778 15.2578 3.55465 15.5859 4.04684 15.5859Z"
                fill="white"
              />
              <path
                d="M34.2343 27.2891L31.9922 21.3828C31.8828 21.0547 31.6093 20.7812 31.2812 20.6719C30.9531 20.5625 30.625 20.5078 30.2968 20.6719L24.2812 22.9687C23.789 23.1328 23.5156 23.7344 23.7343 24.2266C23.8984 24.7187 24.5 24.9922 24.9922 24.7734L28.7109 23.3516C26.6328 27.6719 22.2031 30.5156 17.1718 30.5156C11.6484 30.5156 6.78122 27.0703 5.0859 21.9297C4.86715 21.4375 4.32028 21.1641 3.82809 21.3281C3.3359 21.4922 3.06247 22.0391 3.22653 22.5312C5.19528 28.4375 10.7734 32.4297 17.1172 32.4297C23.1328 32.4297 28.4922 28.875 30.6797 23.4609L32.4297 28C32.5937 28.3828 32.9218 28.6016 33.3047 28.6016C33.414 28.6016 33.5234 28.6016 33.6328 28.5469C34.1797 28.3281 34.4531 27.7813 34.2343 27.2891Z"
                fill="white"
              />
            </svg>
          </div>
          <h4 className="text-dark mb-3 text-xl font-semibold">Regular Updates</h4>
          <p className="text-body-color">
          You will find reguler updates here. Regular job postings and updates are made. 
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


        </div>
    );
};

export default WhatWeOffer;