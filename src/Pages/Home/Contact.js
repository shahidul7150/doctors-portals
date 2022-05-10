import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';
import appointment from '../../assets/images/appointment.png'
const Contact = () => {
  return (
      <div
          
      style={{background:`url(${appointment})`}}
          className="p-12">
          <h3 className='text-primary text-center font-bold'>Contact Us</h3>
          <h2 className='text-3xl text-white text-center mb-5'>Stay connect with us</h2>
      <form className='w-[50%] mx-auto'>
        <div class="mb-6">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-white "
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="name@doctorlike.com"
            required
          ></input>
        </div>
        <div class="mb-6">
          <label
            for="base-input"
            class="block mb-2 text-sm font-medium text-white "
          >
            Base input
          </label>
          <input
            type="text"
            id="base-input"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          ></input>
        </div>
        <div class="mb-6">
          <label
            for="message"
            class="block mb-2 text-sm font-medium text-white "
          >
            Your message
          </label>
          <textarea
            id="message"
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Leave a comment..."
          ></textarea>
        </div>

              <div className='flex justify-center'>
              <PrimaryButton>Submit</PrimaryButton>
        </div>
      </form>
    </div>
  );
};

export default Contact;
