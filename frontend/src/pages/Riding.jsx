import React from "react";
import { NavLink } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen w-full flex justify-center bg-gray-100 overflow-hidden">
      <div className="w-full max-w-[420px] bg-white h-full flex flex-col">

        {/* MAP SECTION */}
        <div className="h-[45%] relative">
          <NavLink
            to="/home"
            className="absolute right-3 top-3 z-20 h-11 w-11 bg-white shadow-lg flex items-center justify-center rounded-full active:scale-95 transition"
          >
            <i className="text-xl ri-home-4-line"></i>
          </NavLink>

          <iframe
            className="h-full w-full object-cover"
            title="map"
            src="https://www.google.com/maps?q=india,India&output=embed"
            loading="lazy"
          />
        </div>

        {/* DETAILS SECTION */}
        <div className="flex-1 px-4 py-3 flex flex-col justify-between">

          {/* DRIVER INFO */}
          <div className="flex items-center justify-between">
            <img
              className="h-20 w-20 rounded-full object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAZwThJhRwbiVaddG9TP3e_QkPH--yNbFUpw&s"
              alt=""
            />
            <div className="text-right">
              <h2 className="text-base font-semibold">Sarthak</h2>
              <h4 className="text-sm font-medium">MH 15 BF 3144</h4>
              <p className="text-xs text-gray-500">Maruti Suzuki Alto</p>
            </div>
          </div>

          {/* TRIP DETAILS */}
          <div className="mt-4 space-y-3">

            <div className="flex items-start gap-4 p-3 rounded-xl bg-gray-50">
              <i className="ri-user-fill text-lg text-gray-600 mt-1"></i>
              <div>
                <h3 className="text-sm font-semibold">562/11-A</h3>
                <p className="text-xs text-gray-500">
                  Kankariya Talab, Bhopal
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 rounded-xl bg-gray-50">
              <i className="ri-currency-line text-lg text-gray-600"></i>
              <div>
                <h3 className="text-sm font-semibold">$4.5</h3>
                <p className="text-xs text-gray-500">Cash</p>
              </div>
            </div>

          </div>

          {/* PAYMENT BUTTON */}
          <div className="pt-4">
            <button className="w-full bg-green-500 text-white py-3 rounded-xl text-base font-semibold active:scale-95 transition">
              Make a payment
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Riding;
