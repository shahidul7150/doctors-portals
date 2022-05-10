import React from 'react';
import Banner from './Banner';
import ExpectDental from './ExpectDental';
import Info from './Info';
import Services from './Services';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <ExpectDental></ExpectDental>
        </div>
    );
};

export default Home;