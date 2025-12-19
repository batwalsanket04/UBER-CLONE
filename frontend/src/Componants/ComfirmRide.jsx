import React, { forwardRef } from 'react'

const ComfirmRide =forwardRef((props,ref)=>{
  return (
    <div>
       <h5   ref={ref}
       onClick={()=>props.setconfirmRide(false)}
            className=" p-2 text-center  top-0"
          >
            <i className="ri-arrow-down-wide-line text-2xl text-gray-300"></i>
          </h5>
          <h3 className="text-2xl text-center font-semibold mg-5 ">Confirm your ride</h3>
         <div className='flex h-full flex-col gap-2  justify-between items-center justify-center'>
          <img
              className="h-30  "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAZwThJhRwbiVaddG9TP3e_QkPH--yNbFUpw&s"
              alt=""
            />
         </div>
         <div className='w-full gap-3  mt-5 max-w-[420px]'>
           <div className='flex items-center gap-5 p-3 border-gray-200 border-b-2 '>
             <i className=" text-lg ri-user-fill"></i>
             <div>
              <h3 className='text-lg font-medium'>562/11-A</h3>
              <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab,Bhopal</p>
             </div>
           </div>
           <div>
             <div className='flex items-center gap-5 p-3 border-b-2 border-gray-300  '>
             <i className=" text-lg ri-user-fill"></i>
             <div>
              <h3 className='text-lg font-medium '>562/11-A</h3>
              <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab,Bhopal</p>
             </div>
           </div>
           </div>
           <div>
             <div className='flex items-center gap-5 p-3  border-b-2 border-gray-300 '>
           <i className="ri-currency-line"></i>
             <div>
              <h3 className='text-lg font-medium  '>$4.5</h3>
              <p className='text-sm -mt-1 text-gray-600'> Cash Cash </p>
             </div>
           </div>
           </div>

         </div>
         <div className='mt-5'>
<button
  onClick={() => {
    props.setconfirmRide(false);
    props.setVehicalFound(false);
    props.setLookingDriver(true);
  }}
  className="w-full max-w-[420px] text-white font-semibold p-2 rounded-lg bg-green-400"
>
  confirm
</button>

         </div>
    </div>
  )

})
export default ComfirmRide
