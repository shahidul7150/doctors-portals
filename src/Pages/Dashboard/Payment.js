import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(
  'pk_test_51L1AMXDekSkr4my9jcVLv2usiPrd0F1f9JSLnOfveOqmza0LloSmTS5H2BFjHOwjDyfkEWgV8UyHaaP9DxPoFMAa00bIxxn1sp'
);
const Payment = () => {
  const { id } = useParams();
  const url = `https://polar-spire-82017.herokuapp.com/booking/${id}`;
  const { data: appointment, isLoading } = useQuery(['booking', id], () =>
    fetch(url, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }).then((res) => res.json())
  );
//   console.log(appointment);
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div class="card-body">
          <p className="text-success font-bold">
            Hello ,{appointment.patientName}
          </p>
          <h2 class="card-title">Pay for {appointment.treatment}</h2>
          <p>
            Your Appointment: ↴ <br />
            <span className="text-orange-700">
              {appointment.date} at {appointment.slot}
            </span>
          </p>
          <p>Please Pay: 💲 <span className='text-success font-bold text-xl'>{appointment.price}</span> </p>
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm appointment={appointment} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
