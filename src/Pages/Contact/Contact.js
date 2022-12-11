import React from 'react';
import king from '../../image/IMG_0762.HEIC'
import rafa from '../../image/image1.jpeg'
import didi from '../../image/IMG_0763.HEIC'
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div>
            <div className="py-20 bg-gray-50">
    <div className="container mx-auto px-6 md:px-12 xl:px-32">
        <div className="mb-16 text-center">
            <h2 className="mb-4 text-center text-2xl text-gray-900  md:text-4xl f">Meet Our <span className='text-indigo-700'>Team</span></h2>
            <p className="text-gray-600 lg:w-8/12 lg:mx-auto f1">We have a great team to support you and your organaization 247</p>
        </div>
        <div className="grid gap-12 items-center md:grid-cols-3">
            <div className="space-y-4 text-center">
                <img className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64" 
                    src={didi} alt="woman" loading="lazy" width="640" height="805"/>
                <div>
                    <h4 className="text-2xl">Shatabdi Roy</h4>
                    <span className="block text-sm text-gray-500">Chief Technical Officer</span>
                </div>
            </div>
            <div className="space-y-4 text-center">
                <img className="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80" 
                    src={king} alt="man" loading="lazy" width="1000" height="667"/>
                <div>
                    <h4 className="text-2xl">Abdullah Sayid</h4>
                    <span className="block text-sm text-gray-500">CEO</span>
                </div>
            </div>
            <div className="space-y-4 text-center">
                <img className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64" 
                    src={rafa} alt="woman" loading="lazy" width="1000" height="667"/>
                <div>
                    <h4 className="text-2xl">Nadira Anjum</h4>
                    <span className="block text-sm text-gray-500">Chief Operations Officer</span>
                </div>
            </div>
        </div>
    </div>
</div>
        <section className='bg-indigo-50 my-44 '>
            
            <div className='py-10'>
        
            <div className='text-center mmt-20  '  >
                <h5 className='text-primary text-xl  f1'>Contact Us</h5>
                <h1 className='text-4xl f my-3 '>Stay connected with us</h1>
                <div className='text-center font-semibold '>
           <p className="text-black mb-6 w-5/12 mx-auto">
          Stay Conected with us by using email or phone. You can ask any qestion about our website. You can also send us massege to give your opinions and feedback. Your feedback is very importent to us.
        </p>
        <p className=" mb-2">Kadirabd housing, House:03, Road:03, 1207, Mohammodpur, Dhaka </p>
        <p className=" mb-2">01580394350</p>
        <a href='mailto:abdullah15-12377@gmail.com' className=" mb-2">abdullah15-12377@gmail.com</a>
      
            </div>
            </div>
            <div className='mx-auto max-w-sm mt-10 px-5'>
            <form className='' action="">
            <input type="email" placeholder="Email" className="input w-full max-w-sm block "/>
            <input type="text" placeholder="Subject" className="input w-full max-w-sm block my-4"/>
            <textarea className="textarea block max-w-sm w-full my-4"  placeholder="Your message"></textarea>
            <Link to='/findjob' className='btn btn-primary bg-indigo-700  text-white text-center w-full'>Submit</Link>
            </form>
            </div>
            </div>
         

        </section>
        </div>
    );
};

export default Contact;