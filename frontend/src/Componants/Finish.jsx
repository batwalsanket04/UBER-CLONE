import React from 'react'
import { NavLink } from 'react-router-dom';

const Finish = (props) => {
  return (
   <div className="min-h-screen flex flex-col bg-white">

      {/* Sticky Header */}
      <div className="sticky top-0 z-10 bg-white">
        <h5
          onClick={() => props.setFinishride(false)}
          className="p-2 text-center"
        >
          <i className="ri-arrow-down-wide-line text-2xl text-gray-300"></i>
        </h5>

        <h3 className="text-2xl text-center font-semibold mb-2">
          Finish this ride        </h3>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-3 pt-2">

        {/* Rider Info */}
        <div className="flex items-center justify-between mt-4 bg-yellow-400 rounded-2xl p-3">
          <div className="flex items-center gap-3">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src="https://tse3.mm.bing.net/th/id/OIP.X47s-sdJeejd46HIDWBLPQHaLH"
              alt=""
            />
            <h2 className="text-lg font-medium">Harsh Patel</h2>
          </div>
          <h5 className="text-lg font-medium">2.3 KM</h5>
        </div>

        {/* Location & Price */}
        <div className="mt-5">
          <div className="flex items-center gap-5 p-3 border-b">
            <i className="ri-user-fill text-lg"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm text-gray-600">
                Kankariya Talab, Bhopal
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-3 border-b">
            <i className="ri-user-fill text-lg"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm text-gray-600">
                Kankariya Talab, Bhopal
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-3 border-b">
            <i className="ri-currency-line text-lg"></i>
            <div>
              <h3 className="text-lg font-medium">$4.5</h3>
              <p className="text-sm text-gray-600">Cash</p>
            </div>
          </div>
        </div>
        {/* Actions */}
        <div className="mt-10 pb-6">
          <NavLink
            to="/captain-home"
            onClick={() => props.setridepopup(false)}
            className="w-full flex justify-center text-white font-semibold p-2 rounded-lg bg-green-400"
          >Finish ride
          </NavLink>
          <p className='mt-10 text-xs'>Click on finish ride button if you have completed the payment</p>
        </div>
      </div>
    </div>
  )
}

export default Finish
