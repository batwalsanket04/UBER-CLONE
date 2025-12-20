import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import CaptainDetails from "../Componants/CaptainDetails";
import RidePopup from "../Componants/RidePopup";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";
import ConfirmRidepopup from "../Componants/ConfirmRidepopup";

const CaptainHome = () => {
 const[ridepopup,setridepopup]=useState(true)
 const ridepopupRef=useRef(null)
 const[confirmridepopup,setconfirmridepopup]=useState(false)
 const confirmridepopupRef=useRef(null)


 useGSAP(
     function () {
       if (ridepopup) {
         gsap.to(ridepopupRef.current, {
           transform: "translateY(0)",
         });
       } else {
         gsap.to(ridepopupRef.current, {
           transform: "translateY(100%)",
         });
       }
     },
     [ridepopup]
   );
   useGSAP(
     function () {
       if (confirmridepopup) {
         gsap.to(confirmridepopupRef.current, {
           transform: "translateY(0)",
         });
       } else {
         gsap.to(confirmridepopupRef.current, {
           transform: "translateY(100%)",
         });
       }
     },
     [confirmridepopup]
   );

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
         <CaptainDetails/>
        </div>
        <div ref={ridepopupRef} className="fixed w-full max-w-[420px] translate-y-full z-10 bottom-0   bg-white p-3 py-6 px-8">
           <RidePopup setridepopup={setridepopup} setconfirmridepopup={setconfirmridepopup}/>
        </div>
      <div ref={confirmridepopupRef} className="fixed w-full max-w-[420px] translate-y-full z-10 bottom-0   bg-white p-3 py-6 px-8">
           <ConfirmRidepopup setconfirmridepopup={setconfirmridepopup} setridepopup={setridepopup}/>
        </div>

      </div>
    </div>
  );
};

export default CaptainHome;
