import React, { useEffect } from 'react';
import auth from '../../firebase.init';
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

    const [token]=useToken( user||gUser)
  let signInError;
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || '/';
//     if (token) {
//         navigate(from, { replace: true });
// }
  useEffect(() => {
      if (token) {
       
        navigate(from, { replace: true });
      }
  }, [token,from,navigate])
    
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
    


  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <div>
      <div className="card lg:max-w-lg bg-base-100 shadow-xl mx-auto ">
        <div className="card-body  ">
          <h2 className="text-2xl font-bold text-center">Please Login</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className=" input input-bordered w-full "
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
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="lg:min-w-lg input input-bordered w-full "
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
              <label className="label">
                {errors.password?.type === 'required' && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === 'minLength' && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>

            {signInError}
            <input
              className="btn btn-secondary w-full"
              type="submit"
              value="Login"
            />
          </form>
          <p>
            {' '}
            <small>
              New to Doctors Portal ?{' '}
              <Link className="text-secondary" to="/signup">
                Create New Account
              </Link>{' '}
            </small>
          </p>
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

export default Login;
