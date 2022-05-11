import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';

const AppointService = ({ service }) => {
  const { name, slots } = service;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
        <div class="card-body items-center text-center">
          <h2 class="card-title">{name}</h2>
          <p>
            {
              slots.length > 0
                ? <span>{slots[0]} </span>
                : <span className='text-red-500'>Try another day</span>
            }
          </p>
          <p>{ slots.length} {slots.length>1 ? 'spaces' :'space'}  available</p>
          <div class="card-actions justify-center">
            {
              slots.length === 0
                ? <button className='btn' disabled>Book Appointment</button>
                : <PrimaryButton>Book Appointment</PrimaryButton>
            }
            
          </div>
        </div>
      </div>
    );
};

export default AppointService;