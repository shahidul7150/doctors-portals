
import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chair from '../../assets/images/chair.png';
const AppointmentBanner = () => {
  const [date, setDate] = useState();
  return (
    <div class="hero min-h-screen ">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} class="max-w-sm rounded-lg shadow-2xl" alt="" />
        <div>
                  <DayPicker mode="single" selected={date} onSelect={setDate} />
                  {
                      date ?
                          <p>Selected as Appointment Day {format(date, 'PP')}.</p>
                          :
                          <p>Please Select Appointment Day</p>
                  }
                 
              </div>
              
      </div>
    </div>
  );
};

export default AppointmentBanner;
