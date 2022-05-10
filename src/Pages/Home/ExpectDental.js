import React from 'react';
import treatment from '../../assets/images/treatment.png';
const ExpectDental = () => {
  return (
    <div class="card card-side bg-base-100 shadow-xl">
      <figure style={{ height: '25rem', width: '30rem' }}>
        <img
          src="https://res.cloudinary.com/dlg9tnvfx/image/upload/v1652192092/Doctors-portel/treatment_quahye.png"
          alt="Movie"
        />
      </figure>
      <div class="card-body align-middle">
        <h2 class="card-title text-5xl">
          Exceptional Dental Care, on Your Terms
        </h2>
        <p className="text-xl">
          If you feel cavidy in your teeth .emergency you need to appointment a
          doctor.Beacuse teeth is wealth for every human body.
        </p>
        <div class="card-actions justify-start">
          <button class="btn btn-primary bg-gradient-to-r from-secondary to-primary font-bold text-white ">
            Watch
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpectDental;
