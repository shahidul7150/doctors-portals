import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import ExpectDental from './ExpectDental';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <ExpectDental></ExpectDental>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <Contact></Contact>
        </div>
    );
};

export default Home;