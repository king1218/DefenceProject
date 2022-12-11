import React from 'react';
import { Link } from 'react-router-dom';

 
const ContactUs = () => {
    
    return (
        <div>
 
        <section className='bg-indigo-50 my-44 '>
            
            <div className='py-10'>
        
            <div className='text-center mmt-20  '  >
                <h5 className='text-primary text-xl  f1'>Contact Us</h5>
                <h1 className='text-4xl f my-3 '>Stay connected with us</h1>
                <div className='text-center  '>
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
            <Link to='/appointment' className='btn btn-primary bg-indigo-700  text-white text-center w-full'>Submit</Link>
            </form>
            </div>
            </div>
         

        </section>
        </div>
    );
};

export default ContactUs;