import React from 'react'

const CaptainDetails = () => {
  return (
    <div>
       <div className="flex items-center justify-between ">
            <div className="flex  justify-between">
              <img className="h-10 w-10  rounded-full object-cover" src="https://tse3.mm.bing.net/th/id/OIP.X47s-sdJeejd46HIDWBLPQHaLH?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
              <h4 className="text-lg p-2">Harsh patel</h4>
            </div>
            <div className=" p-6">
              <h4 className="text-xl font-semibold">$10.60</h4>
              <p className="text-sm bg-gray-200 text-center rounded-xl">Earned</p>
            </div>
          </div>
          <div className="flex p-3 bg-gray-100 rounded-xl justify-center gap-4 items-start">
            <div className="text-center">
              <i className="text-3l mb-2 font-thin ri-calendar-schedule-line"></i>
            <h5 className="text-lg">10.5 hr</h5>
            <p className="text-small text-gray-600">Hours Online</p>
            </div>
            <div className="text-center">
              <i className="text-3xlmb-2  font-thin ri-dashboard-2-line"></i>
              <h5 className="text-lg">10.5 hr</h5>
            <p className="text-small text-gray-600">Hours Online</p>
            </div>
            <div className="text-center">
              <i className="text-3xlmb-2  font-thin ri-book-line"></i>
             <h5 className="text-lg">10.5 hr</h5>
            <p className="text-small text-gray-600">Hours Online</p>
            </div>
          </div>
    </div>
  )
}

export default CaptainDetails
