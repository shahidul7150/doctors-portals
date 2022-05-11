import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chair from '../../assets/images/chair.png';
const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div class="hero min-h-screen bg-[url('https://res.cloudinary.com/dlg9tnvfx/image/upload/v1652168664/Doctors-portel/bg_kzruzx.png')] ">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} class="max-w-sm rounded-lg shadow-2xl" alt="" />
        <div>
          <DayPicker mode="single" selected={date} onSelect={setDate} />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
