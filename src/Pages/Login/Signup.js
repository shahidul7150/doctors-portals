import React from 'react';
import auth from '../../firebase.init';
import {
    useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import Loading from '../Shared/Loading';
import { Link } from 'react-router-dom';


const Signup = () => {

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  let signInError;

  if (loading || gLoading) {
    return <Loading></Loading>;
  }

  if (error || gError) {
    signInError = (
      <small className="text-red-500">
        {error?.message || gError?.message}
      </small>
    );
  }
  if (user||gUser) {
    console.log(user._tokenResponse.email);
    console.dir(user);
  }

  const onSubmit = (data) => {
    console.log(data);
    createUserWithEmailAndPassword(data.email, data.password);
  };

    return (
        <div>
      <div className="card lg:max-w-lg bg-base-100 shadow-xl mx-auto ">
        <div className="card-body  ">
          <h2 className="text-2xl font-bold text-center">Please Sign Up</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        
                    <div class="form-control w-full ">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                class=" input input-bordered w-full "
                {...register('name', {
                  required: {
                    value: true,
                    message: 'Name is Required',
                  }
                })}
              />
              <label class="label">
                {errors.name?.type === 'required' && (
                  <span class="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
                
              </label>
            </div>

            <div class="form-control w-full ">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                class=" input input-bordered w-full "
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
              <label class="label">
                {errors.email?.type === 'required' && (
                  <span class="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === 'pattern' && (
                  <span class="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
           

            <div class="form-control w-full ">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                class="lg:min-w-lg input input-bordered w-full "
                {...register('password', {
                  required: {
                    value: true,
                    message: 'Password is Required',
                  },
                  minLength: {
                    value: 6,
                    message: 'Must be 6 characters or longer',
                  },
                })}
              />
              <label class="label">
                {errors.password?.type === 'required' && (
                  <span class="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === 'minLength' && (
                  <span class="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>

            {signInError}
            <input
              className="btn btn-secondary w-full"
              type="submit"
              value="Sign Up"
            />
                  </form>
                  <p> <small>Already have an account ? <Link className='text-secondary' to="/login">Please login</Link> </small></p>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className=" btn btn-outline btn-secondary"
          >
            Google
          </button>
        </div>
      </div>
    </div>
    );
};

export default Signup;