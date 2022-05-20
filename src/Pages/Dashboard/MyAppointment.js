import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      fetch(
        `https://polar-spire-82017.herokuapp.com/booking?patient=${user.email}`,
        {
          method: 'GET',
          headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      )
        .then((res) => {
          console.log('res', res);
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem('accessToken');
            navigate('/');
          }
          return res.json();
        })
        .then((data) => {
          setAppointments(data);
        });
    }
  }, [user]);
  return (
    <div>
      <h2>My appointment : {appointments.length}</h2>

      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Treatment</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appoint, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{appoint.patientName}</td>
                <td>{appoint.date}</td>
                <td>{appoint.slot}</td>
                <td>{appoint.treatment}</td>
                <td>
                  {appoint.price && !appoint.paid && (
                    <Link to={`/dashboard/payment/${appoint._id}`}>
                      
                      <button className="btn btn-xs btn-success">Pay</button>
                    </Link>
                  )}
                  {appoint.price && appoint.paid && (
                    <p className='text-success'>Paid</p>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
