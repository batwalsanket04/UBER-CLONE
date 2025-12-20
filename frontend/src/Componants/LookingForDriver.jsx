import React, { forwardRef } from 'react'

const LookingForDriver = forwardRef((props,ref)=>{
  return (
    <div>
       <h5 ref={ref}
       onClick={()=>props.setLookingDriver(false)}
            className=" p-2 text-center  top-0"
          >
            <i className="ri-arrow-down-wide-line text-2xl text-gray-300"></i>
          </h5>
          <h3 className="text-2xl text-center font-semibold mg-5 ">Looking for Rides</h3>
         <div className=' flex item-center justify-between'>
          <img
              className="h-20 w-20"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAZwThJhRwbiVaddG9TP3e_QkPH--yNbFUpw&s"
              alt=""
            />
             <div className='text-right'>
          <h2 className='text-lg font-medium'> Sarthak</h2>
          <h4 className='text-lg font-semibold'>Mh 15 BF 3144</h4>
          <p className='text-sm text-gray-600'>maruti suzuki alto</p>
         </div>
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
             <div className='flex items-center gap-5 p-3 mb-4  border-b-2 border-gray-300 '>
           <i className="ri-currency-line"></i>
             <div>
              <h3 className='text-lg font-medium  '>$4.5</h3>
              <p className='text-sm -mt-1 text-gray-600'> Cash Cash </p>
             </div>
           </div>
           </div>

         </div>
         
    </div>
  )
})

export default LookingForDriver 
