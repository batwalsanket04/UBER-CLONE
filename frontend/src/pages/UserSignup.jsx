import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserSignup = () => {

  const nav = useNavigate();
  const [error, setError] = useState('');

  const [form, setForm] = useState({
    fullName: {
      firstname: '',
      lastname: '',
    },
    email: '',
    password: ''
  });

  // ✅ Handle Input Changes
  const handleForm = (e) => {
    const { name, value } = e.target;

    setError(""); // Clear old error when typing

    if (name === "firstname" || name === "lastname") {
      setForm({
        ...form,
        fullName: {
          ...form.fullName,
          [name]: value
        }
      });
    } else {
      setForm({
        ...form,
        [name]: value
      });
    }
  };

 
  const handleSubmit = async (e) => {
  e.preventDefault();

  const { fullName, email, password } = form;

  if (!fullName.firstname || !email || !password) {
    return alert("Please fill all required fields");
  }

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!passwordRegex.test(password)) {
    return setError("Password is not strong enough");
  }

  try {
    const result = await axios.post(
      'http://localhost:3000/api/user/register',
      {
        fullName: form.fullName,   // ✅ OBJECT
        email,
        password
      }
    );

    alert(result.data.message || "Registration Successful");
    nav('/user-login');

    setForm({
      fullName: { firstname: '', lastname: '' },
      email: '',
      password: ''
    });

  } catch (error) {
    alert(error.response?.data?.message || "Something went wrong");
  }
};


  return (
    <div className="flex justify-center min-h-screen bg-gray-100">
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
              value={form.fullName.firstname}
              onChange={handleForm}
              placeholder="First Name"
            />

            <input
              className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border"
              type="text"
              name="lastname"
              value={form.fullName.lastname}
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
            className="bg-[#eeeeee] mb-2 rounded-lg px-4 py-2 border w-full"
            type="password"
            name="password"
            value={form.password}
            onChange={handleForm}
            placeholder="password"
          />

           
          {error && (
            <p className="text-red-500 text-sm mb-3">Please Enter Strong Password</p>
          )}

          <button className="bg-[#111] text-white font-semibold py-3 rounded-lg w-full">
            Signup
          </button>

        </form>

        <p className="mt-4 text-center text-sm">
          Already have an account?
          <NavLink
            to={"/user-login"}
            className="text-blue-600 ml-1 font-medium"
          >
            Login here
          </NavLink>
        </p>

        <div className="mt-6">
          <p className="text-[13px] text-center leading-tight">
            Let’s get you moving. Book rides in seconds.
          </p>
        </div>

      </div>
    </div>
  );
};

export default UserSignup;
