import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointService from './AppointService';

const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
            <h4 className='text-xl text-secondary text-center font-bold'> Available Appointment on {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 '>
                {
                    services.map(service => <AppointService
                        key={service._id}
                        service={service}
                    ></AppointService>)
                }
            </div>
        </div>
    );
};

export default AvailableAppointment;