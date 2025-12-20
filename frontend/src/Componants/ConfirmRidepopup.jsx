import React from 'react'
import { NavLink } from 'react-router-dom';

const ConfirmRidepopup = (props) => {
  return (
     <div className='h-screen'>
      <h5
        onClick={() => props.setridepopup(false)}
        className=" p-2 text-center  top-0"
      >
        <i className="ri-arrow-down-wide-line text-2xl text-gray-300"></i>
      </h5>
      <h3 className="text-2xl text-center font-semibold mg-5 ">
    Confirm  this ride to start
      </h3>
      <div className="flex items-center gap-3 justify-between mt-4 bg-yellow-400 rounded-2xl">
        <div className="flex text-center p-3 ">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://tse3.mm.bing.net/th/id/OIP.X47s-sdJeejd46HIDWBLPQHaLH?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"
            alt=""
          />
          <h2 className="text-lg p-2 font-medium ms-3">Harsh patel</h2>
        </div>
        <h5 className="text-lg font-medium mr-3">2.3 KM</h5>
      </div>

      <div className="w-full gap-3  mt-5 max-w-[420px]">
        <div className="flex items-center gap-5 p-3 border-gray-200 border-b-2 ">
          <i className=" text-lg ri-user-fill"></i>
          <div>
            <h3 className="text-lg font-medium">562/11-A</h3>
            <p className="text-sm -mt-1 text-gray-600">
              Kankariya Talab,Bhopal
            </p>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-5 p-3 border-b-2 border-gray-300  ">
            <i className=" text-lg ri-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium ">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Talab,Bhopal
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-5 p-3  border-b-2 border-gray-300 ">
            <i className="ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium  ">$4.5</h3>
              <p className="text-sm -mt-1 text-gray-600"> Cash Cash </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <NavLink to={"/captain-riding"} onClick={()=>{props.setridepopup(false)}} className="w-full max-w-[420px] flex justify-center text-white font-semibold p-2 rounded-lg bg-green-400">
         Confirm
        </NavLink>
        <button onClick={()=>{props.setconfirmridepopup(false),
            props.setridepopup(false)}} className="w-full mt-3 max-w-[420px] bg-red-500 text-gray-700  font-semibold p-2 rounded-lg ">
          Cancel
        </button>
      </div>
    </div>
  )
}

export default ConfirmRidepopup
