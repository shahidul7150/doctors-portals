import React from 'react';


const AppointService = ({ service,setTreatment }) => {
  const { name, slots } = service;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
        <div class="card-body items-center text-center">
          <h2 class="card-title text-secondary text-2xl font-bold">{name}</h2>
          <p>
            {
              slots.length > 0
                ? <span>{slots[0]} </span>
                : <span className='text-red-500'>Try another date</span>
            }
          </p>
          <p>{ slots.length} {slots.length>1 ? 'spaces' :'space'}  available</p>
          <div class="card-actions justify-center">
         
            <label for="booking-modal"
              disabled={slots.length === 0}
              onClick={() => setTreatment(service)}
              class="btn btn-sm btn-secondary text-white uppercase">Book Appointment</label>
          </div>
        </div>
      </div>
    );
};

export default AppointService;