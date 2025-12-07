import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const UserSignup = () => {

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

        {/* ✅ ADDED overflow-y-auto */}
        <div className="p-5 flex flex-col justify-between w-full max-w-sm overflow-y-auto">

          <img
            className="w-16 ml-2 pb-4 pt-2 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvX533EovsVfveDcBMdK97_2cXZPO_9TY03A&s"
            alt=""
          />

          <form onSubmit={handleSubmit} className="bg-white p-5 rounded-xl shadow-md">

            <h3 className="text-lg mb-2 font-medium">What's Your Name</h3>
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

            <h3 className="text-lg mb-2 font-medium">What's Your Email</h3>
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
            Already Have a account?
            <NavLink
              to={"/user-login"}
              className="text-blue-600 ml-1 font-medium"
            >
              Login here
            </NavLink>
          </p>

          <div className="mt-6">
            <p className='text-[13px] text-center leading-tight'>
              Let’s get you moving. Book rides in seconds.
            </p>
          </div>

        </div>
      </div>
    </>
  );
};

export default UserSignup;
