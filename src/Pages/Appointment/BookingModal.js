import React from 'react';

const BookingModal = ({ treatment }) => {
  const { name, slots } = treatment;
  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            for="booking-modal"
            class="btn btn-sm btn-circle absolute bg-secondary border-0 right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg text-secondary text-center">Booking for : {name}</h3>
          <form className='grid gird-cols-1 gap-3 justify-items-center mt-2'>
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
              class="btn btn-secondary font-bold text-white w-full max-w-xs"
            />
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
