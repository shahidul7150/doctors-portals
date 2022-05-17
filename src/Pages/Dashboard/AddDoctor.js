import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const { data: services, isLoading } = useQuery('services', () =>
    fetch('http://localhost:5000/service').then((res) => res.json())
  );

  const imageStorageKey = 'd46803d80a057c0ce0603c3a2117c9b1';

  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    console.log(url);
    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            img: img,
          };
          // send to database
          fetch('http://localhost:5000/doctor', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                  toast.success('Doctor added successfully');
                  reset()
                }
              else {
                  toast.error('Failed to add doctor')
                }
            });
        }
      });
  };
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2 className="text-2xl text-center mt-6 mb-3">Add a new doctor</h2>

      <div className="card-body w-[50%] mx-auto bg-slate-200">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className=" input input-bordered input-sm w-full "
              {...register('name', {
                required: {
                  value: true,
                  message: 'Name is Required',
                },
              })}
            />
            <label className="label">
              {errors.name?.type === 'required' && (
                <span className="label-text-alt text-red-500">
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className=" input input-bordered input-sm w-full "
              {...register('email', {
                required: {
                  value: true,
                  message: 'Email is Required',
                },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: 'Provide a valid email',
                },
              })}
            />
            <label className="label">
              {errors.email?.type === 'required' && (
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
              {errors.email?.type === 'pattern' && (
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
            </label>
          </div>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">specialty</span>
            </label>

            <select {...register('specialty')} class="select w-full ">
              {services.map((service) => (
                <option key={service._id} value={service.name}>
                  {service.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Upload Photo</span>
            </label>
            <input
              type="file"
              className=" input input-ghost w-full "
              {...register('image', {
                required: {
                  value: true,
                  message: 'Image is Required',
                },
              })}
            />
            <label className="label">
              {errors.image?.type === 'required' && (
                <span className="label-text-alt text-red-500">
                  {errors.image.message}
                </span>
              )}
            </label>
          </div>

          <input
            className="btn btn-secondary text-white w-full"
            type="submit"
            value="Add"
          />
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
