import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const CaptainSignup = () => {

  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  });

  const handleForm = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);

    setForm({
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    });
  };

  return (
    <>
      <div className="flex justify-center min-h-screen bg-gray-100">

 
        <div className="p-5 flex flex-col justify-between w-full max-w-sm overflow-y-auto">

          <img
            className="w-16 ml-2 pb-4 pt-2 rounded-full"
            src="https://www.shutterstock.com/image-vector/go-logo-design-simple-arrow-260nw-2452682471.jpg"
            alt=""
          />

          <form onSubmit={handleSubmit} className="bg-white p-5 rounded-xl shadow-md">

            <h3 className="text-lg mb-2 font-medium">What's Our Captains Name</h3>

            <div className="flex gap-2 mb-5">
              <input
                className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border"
                type="text"
                name="firstname"
                value={form.firstname}
                onChange={handleForm}
                placeholder="First Name"
              />

              <input
                className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border"
                type="text"
                name="lastname"
                value={form.lastname}
                onChange={handleForm}
                placeholder="Last Name"
              />
            </div>

            <h3 className="text-lg mb-2 font-medium">Captain Email</h3>
            <input
              className="bg-[#eeeeee] mb-5 rounded-lg px-4 py-2 border w-full"
              type="email"
              name="email"
              value={form.email}
              onChange={handleForm}
              placeholder="email@gmail.com"
            />

            <h3 className="text-lg mb-2 font-medium">Enter Password</h3>
            <input
              className="bg-[#eeeeee] mb-5 rounded-lg px-4 py-2 border w-full"
              type="password"
              name="password"
              value={form.password}
              onChange={handleForm}
              placeholder="password"
            />

            <button className="bg-[#111] text-white font-semibold py-3 rounded-lg w-full">
              Signup
            </button>

          </form>

          <p className="mt-4 text-center text-sm">
            Already have an account?
            <NavLink
              to={"/captain-login"}
              className="text-blue-600 ml-1 font-medium"
            >
              Login here
            </NavLink>
          </p>

          <div className="mt-6 pb-3">
            <p className="text-[13px] text-center leading-tight">
              This site is protected by <span className='underline'>reCAPTCHA </span>and <span className='underline'>Google terms </span>apply.
            </p>
          </div>

        </div>
      </div>
    </>
  );
};

export default CaptainSignup;
