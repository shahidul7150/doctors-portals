import { format } from 'date-fns';
import React, { useState } from 'react';
import Loading from '../Shared/Loading';
import AppointService from './AppointService';
import BookingModal from './BookingModal';
import { useQuery } from 'react-query';

const AvailableAppointment = ({ date }) => {
  const [treatment, setTreatment] = useState(null);
  const formattedDate = format(date, 'PP');
  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery(['available', formattedDate], () =>
    fetch(`https://polar-spire-82017.herokuapp.com/available?date=${formattedDate}`).then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h4 className="text-xl text-secondary text-center font-bold my-5">
       
        Available Appointment on {format(date, 'PP')}
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 ">
        {services?.map((service) => (
          <AppointService
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></AppointService>
        ))}
      </div>
      {treatment && (
        <BookingModal
          date={date}
          treatment={treatment}
          setTreatment={setTreatment}
          refetch={refetch}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointment;
