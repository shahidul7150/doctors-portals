import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  if (user) {
    console.dir(user._tokenResponse.email);
  }
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <div className="card lg:max-w-lg bg-base-100 shadow-xl mx-auto ">
        <div className="card-body  ">
          <h2 className="text-2xl font-bold text-center">Please Login</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control w-full ">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                class="lg:min-w-lg input input-bordered w-full "
                {...register('email', {
                  pattern: {
                    value: /[A-Za-z]{3}/,
                    message: 'error message', 
                  },
                })}
              />
              <label class="label">
                <span class="label-text-alt">Alt label</span>
              </label>
            </div>
            {/* ------------------------------------------------ */}
            {/* <input />
            {errors.firstName?.type === 'required' && 'First name is required'}

            <input {...register('lastName', { required: true })} />
            {errors.lastName && 'Last name is required'}

            <input type="submit" /> */}
          </form>
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
