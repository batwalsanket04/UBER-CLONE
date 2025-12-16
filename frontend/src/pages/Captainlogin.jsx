import React, { useState } from 'react';
import { Navigate, NavLink } from 'react-router-dom';
import axios from 'axios'

const Captainlogin = () => {

  const [form, setForm] = useState({ email: "", password: "" });

  const handleForm = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const result = await axios.post(
      "http://localhost:3000/api/captain/login",
      {
        email: form.email,
        password: form.password
      }
    );

   
    localStorage.setItem("CaptainToken", result.data.token);

    alert(result.data.message || "Login Successfully");
    Navigate("/captain-home")

  } catch (error) {
    alert(
      error.response?.data?.message || "Login failed"
    );
  }
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

            <h3 className="text-lg mb-2 font-medium">Captain Email</h3>
            <input
              className="bg-[#eeeeee] mb-6 rounded-lg px-4 py-2 border w-full"
              type="email"
              name="email"
              value={form.email}
              onChange={handleForm}
              placeholder="email@gmail.com"
            />

            <h3 className="text-lg mb-2 font-medium">Enter Password</h3>
            <input
              className="bg-[#eeeeee] mb-6 rounded-lg px-4 py-2 border w-full"
              type="password"
              name="password"
              value={form.password}
              onChange={handleForm}
              placeholder="password"
            />

            <button className="bg-[#111] text-white font-semibold py-3 rounded-lg w-full">
              Login
            </button>

          </form>

          <p className="mt-6 text-center text-sm">
            Join a fleet?
            <NavLink
              to={"/captain-signup"}
              className="text-blue-600 ml-1 font-medium"
            >
              Register as Captain
            </NavLink>
          </p>

          <div className="mt-8">
            <NavLink
              to={"/user-login"}
              className="bg-amber-600 flex text-white mb-7 items-center justify-center py-3 w-full rounded-lg font-semibold"
            >
              Sign in as User
            </NavLink>
          </div>

        </div>
      </div>
    </>
  );
};

export default Captainlogin;
