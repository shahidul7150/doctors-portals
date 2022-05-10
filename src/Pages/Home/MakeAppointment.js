import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';


const MakeAppointment = () => {
    return (
        <section
            style={{background:`url(${appointment})`}}
            className='flex justify-center items-center '>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-primary'>Appointment</h3>
                <h2 className='text-3xl text-white'>Make an Appointment Today</h2>
                <p className='text-white'>We are ready to accept your appointment request so that you can get back soon from your suffering disease.so don't late quick appointment with an expert doctor.You need quick response about your problem or you suffer for a long time .</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
            </section>
    );
};

export default MakeAppointment;