import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen bg-white flex justify-center items-center">
      
      {/* PHONE FRAME */}
      <div className="w-full max-w-sm h-screen md:h-[700px] bg-cover bg-center bg-[url(https://plus.unsplash.com/premium_vector-1744958145317-0c601bc396f5?w=352&dpr=2&h=367&auto=format&fit=crop&q=60&ixlib=rb-4.1.0)] flex justify-between flex-col shadow-xl md:rounded-2xl overflow-hidden">
        
        <img
          className='w-16 ml-8 pt-5 rounded-full'
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvX533EovsVfveDcBMdK97_2cXZPO_9TY03A&s"
          alt=""
        />

        <div className='bg-white pb-7 py-4 px-4'>
          <h2 className='text-3xl font-bold'>
            Get Started With <em>GO</em>
          </h2>

          <NavLink
            to={"/user-login"}
            className='flex items-center justify-center w-full text-white bg-black py-3 rounded mt-4'
          >
            Continue
          </NavLink>
        </div>

      </div>

    </div>
  )
}

export default Home
