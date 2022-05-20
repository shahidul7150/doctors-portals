import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import {  toast } from 'react-toastify';

const BookingModal = ({ date, treatment, setTreatment,refetch }) => {
  const [user, loading, error] = useAuthState(auth);
  const {_id, name, slots,price } = treatment;
const formattedDate=format(date,'PP')
  const handleBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    console.log(_id, name, slot);
    
    // Booking information that receive from backend side.......
    const booking = {
      treatmentId: _id,
      treatment: name,
      date: formattedDate,
      slot,
      price,
      patient: user.email,
      patientName: user.displayName,
      phone: event.target.phone.value
    }
//https://polar-spire-82017.herokuapp.com/ 
    // http://localhost:5000/
    fetch('http://localhost:5000/booking', {
      method: 'POST',
      headers: {
        'content-type':'application/json'
      },
      body:JSON.stringify(booking)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);

        if (data.success) {
          toast.success(`Appointment is set, ${formattedDate} at ${slot}`)
        }
        else {
          toast.error(`Already set an appointment on ${data.booking?.date} at ${data.booking?.slot}`)
          
        }
        refetch()
      // to close the modal
        setTreatment(null)
    })
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
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
           
              {slots.map((slot,index) => (
                <option
                  key={index}
                  value={slot}
                >{slot}</option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              disabled
              value={user?.displayName || ''}
              className=" input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="email"
              disabled
              value={user?.email || ''}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="phone"
              required
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
