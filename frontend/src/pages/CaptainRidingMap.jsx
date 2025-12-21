import { useGSAP } from '@gsap/react'
import React, { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { gsap } from 'gsap/gsap-core'
import Finish from '../Componants/Finish'

const CaptainRidingMap = () => {
 
  const [Finishride,setFinishride]=useState(false)
  const FinishrideRef=useRef(null)


  useGSAP(
     function () {
       if (Finishride) {
         gsap.to(FinishrideRef .current, {
           transform: "translateY(0)",
         });
       } else {
         gsap.to(FinishrideRef.current, {
           transform: "translateY(100%)",
         });
       }
     },
     [Finishride]
   );
  return (
      <div className="h-screen w-full flex justify-center bg-gray-100 overflow-hidden">
       
      <div className="w-full max-w-[420px] bg-white h-full flex flex-col">
        {/* MAP SECTION */}
        <div className="h-[95%] relative">
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
        <div onClick={()=>setFinishride(true)} className="h-1/5 flex items-center justify-around bg-yellow-400 relative ">
          <h5
 
        className=" p-2 text-center bottom-20 absolute"
      >
        <i className=" p-3 ri-arrow-up-wide-line text-2xl text-gray-800"></i>
      </h5>
          <h4 className='font-semibold text-xl'>4 KM Away</h4>
          <button className='bg-green-600 text-white  font-semibold p-3 px-10 rounded-lg'>complete ride</button>
        </div>
        
        <div ref={FinishrideRef} className="fixed w-full max-w-[420px] translate-y-full z-10 bottom-0   bg-white p-3 py-6 px-8">
           <Finish setFinishride={setFinishride}  />
        </div>

      </div>
    </div>
  )
}

export default CaptainRidingMap

