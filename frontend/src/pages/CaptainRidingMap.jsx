import React from 'react'
import { NavLink } from 'react-router-dom'

const CaptainRidingMap = () => {
  return (
      <div className="h-screen w-full flex justify-center bg-gray-100 overflow-hidden">
      <div className="w-full max-w-[420px] bg-white h-full flex flex-col">
        {/* MAP SECTION */}
        <div className="h-[70%] relative">
          <div className="absolute top-0 p-3 top-0 flex items-center justify-around">
            <img
              className="w-16  rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvX533EovsVfveDcBMdK97_2cXZPO_9TY03A&s"
              alt=""
            />
          </div>
          <NavLink
            to="/captain-login"
            className=" absolute top-6  right-[5%] h-11 w-11 bg-white shadow-lg flex items-center justify-center rounded-full active:scale-95 transition"
          >
            <i className="text-xl ri-logout-box-r-line"></i>
          </NavLink>

          <iframe
            className="h-full  w-full object-cover"
            title="map"
            src="https://www.google.com/maps?q=india,India&output=embed"
            loading="lazy"
          />
        </div>
        <div className="h-2/5 p-6">
          
        </div>
        

      </div>
    </div>
  )
}

export default CaptainRidingMap

