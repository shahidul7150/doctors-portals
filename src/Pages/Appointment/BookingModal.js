import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ date, treatment,setTreatment }) => {
  const {_id, name, slots } = treatment;

  const handleBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
      console.log(_id, name, slot);
      setTreatment(null)
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            for="booking-modal"
            className="btn btn-sm btn-circle absolute bg-secondary border-0 right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-secondary text-center">
            Booking for : {name}
          </h3>

          {/* input form  */}
          <form onSubmit={handleBooking} className="grid gird-cols-1 gap-3 justify-items-center mt-2">
            <input
              disabled
              type="text"
              value={format(date, 'PP')}
              className="input input-bordered w-full max-w-xs"
            />
            <select name="slot" className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                Select Available Slot
              </option>
              {slots.map((slot) => (
                <option  value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="email"
              placeholder="Email Address"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-secondary font-bold text-white w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
