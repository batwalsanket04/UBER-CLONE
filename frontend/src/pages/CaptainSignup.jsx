import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

const CaptainSignup = () => {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullname: {
      firstname: "",
      lastname: ""
    },
    email: "",
    password: "",
    vehicle: {
      color: "",
      plate: "",
      capacity: "",
      vehicalType: ""
    }
  });

  const handleForm = (e) => {
    const { name, value } = e.target;

    if (name === "firstname" || name === "lastname") {
      setForm({
        ...form,
        fullname: {
          ...form.fullname,
          [name]: value
        }
      });
    } else if (
      name === "color" ||
      name === "plate" ||
      name === "capacity" ||
      name === "vehicalType"
    ) {
      setForm({
        ...form,
        vehicle: {
          ...form.vehicle,
          [name]: value
        }
      });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post(
        "http://localhost:3000/api/captain/register",
        {
          ...form,
          vehicle: {
            ...form.vehicle,
            capacity: Number(form.vehicle.capacity)
          }
        }
        
      );

      alert(result.data.message || "Captain Registered Successfully");
      navigate("/captain-login");

    } catch (error) {
      alert(error.response?.data?.message || "Captain Registration Failed");
    }
  };

  return (
    <div className="flex justify-center min-h-screen bg-gray-100">
      <div className="p-5 flex flex-col justify-between w-full max-w-sm overflow-y-auto">

        {/* Logo */}
        <img
          className="w-16 ml-2 pb-4 pt-2 rounded-full"
          src="https://www.shutterstock.com/image-vector/go-logo-design-simple-arrow-260nw-2452682471.jpg"
          alt=""
        />

        <form onSubmit={handleSubmit} className="bg-white p-5 rounded-xl shadow-md">

          <h3 className="text-lg mb-2 font-medium">
            What's Our Captain's Name
          </h3>

          <div className="flex gap-2 mb-5">
            <input
              className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border"
              type="text"
              name="firstname"
              value={form.fullname.firstname}
              onChange={handleForm}
              placeholder="First Name"
            />

            <input
              className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border"
              type="text"
              name="lastname"
              value={form.fullname.lastname}
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

          <h3 className="text-lg mb-2 font-medium mt-2">Vehicle Information</h3>

          <input
            className="bg-[#eeeeee] mb-3 rounded-lg px-4 py-2 border w-full"
            name="color"
            value={form.vehicle.color}
            onChange={handleForm}
            placeholder="Vehicle Color"
          />

          <input
            className="bg-[#eeeeee] mb-3 rounded-lg px-4 py-2 border w-full"
            name="plate"
            value={form.vehicle.plate}
            onChange={handleForm}
            placeholder="Vehicle Plate"
          />

          <input
            className="bg-[#eeeeee] mb-3 rounded-lg px-4 py-2 border w-full"
            type="number"
            name="capacity"
            value={form.vehicle.capacity}
            onChange={handleForm}
            placeholder="Vehicle Capacity"
          />

          <input
            className="bg-[#eeeeee] mb-5 rounded-lg px-4 py-2 border w-full"
            name="vehicalType"
            value={form.vehicle.vehicalType}
            onChange={handleForm}
            placeholder="car / auto / motorcycle"
          />

          <button className="bg-[#111] text-white font-semibold py-3 rounded-lg w-full">
            Signup
          </button>
        </form>

        <p className="mt-4 text-center text-sm">
          Already have an account?
          <NavLink to="/captain-login" className="text-blue-600 ml-1 font-medium">
            Login here
          </NavLink>
        </p>

        <div className="mt-6">
          <p className="text-[13px] text-center leading-tight">
            This site is protected by reCAPTCHA and Google terms apply.
          </p>
        </div>

      </div>
    </div>
  );
};

export default CaptainSignup;
