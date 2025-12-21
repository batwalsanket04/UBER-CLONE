import axios from "axios";
import React from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Userlogin = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const nav=useNavigate();

  const handleForm = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    console.log(form);
  };

  const handleSubmit=async(e) => {
    e.preventDefault();
    try {
      const result=await axios.post('http://localhost:3000/api/user/login',form)
      localStorage.setItem("token", result.data.token)
      alert(result.data.message || "Login Successfully")
      setForm({email:"",password:""})
      nav("/home")
    } catch (error) {   
      alert(error.response?.data?.message || "Login Failed")
    }
    
  };

  return (
    <>
      
      <div className="flex justify-center min-h-screen bg-gray-100">
       
        <div className="p-5 flex flex-col justify-between w-full max-w-sm overflow-y-auto">

          <img
            className="w-16 ml-2 pb-4 pt-2 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvX533EovsVfveDcBMdK97_2cXZPO_9TY03A&s"
            alt=""
          />

          <div>
            <form
              onSubmit={handleSubmit}
              className="bg-white p-5 rounded-xl shadow-md"
            >
              <h3 className="text-lg mb-2 font-medium">
                What's Your Email
              </h3>

              <input
                className="bg-[#eeeeee] mb-6 rounded-lg px-4 py-2 border w-full"
                type="email"
                name="email"
                value={form.email}
                onChange={handleForm}
                required
                placeholder="email@gmail.com"
              />

              <h3 className="text-lg mb-2 font-medium">
                Enter Password
              </h3>

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
              New here?
              <NavLink
                to={"/user-signup"}
                className="text-blue-600 ml-1 font-medium"
              >
                Create new account
              </NavLink>
            </p>
          </div>

          <div className="mt-6">
            <NavLink
              to={"/captain-login"}
              className="bg-green-600 flex text-white mb-7 items-center justify-center py-3 w-full rounded-lg font-semibold"
            >
              Sign in as Captain
            </NavLink>
          </div>

        </div>
      </div>
    </>
  );
};

export default Userlogin;
