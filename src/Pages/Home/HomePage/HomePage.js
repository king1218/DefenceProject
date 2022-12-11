import React from 'react';


import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import JobCategory from '../../JobCategory/JobCategory';

import Reviews from '../Reviews/Reviews';
import Statistics from '../Statistics/Statistics';
import Why from '../Why/Why';



const HomePage = () => {
    return (
        <div>
          
            
            <Banner></Banner>
            <JobCategory></JobCategory>
            <Why></Why>
            <Reviews></Reviews>
           <Statistics></Statistics>
           <ContactUs></ContactUs>
            
        </div>
    );
};

export default HomePage;