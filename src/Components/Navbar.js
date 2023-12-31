import React from 'react'
const date =new Date().toLocaleTimeString()
console.log(date);
export default function Navbar() {
  return (
   
    <div className='w-full h-16  flex items-center justify-evenly'>
        <div className='h-10 w-56 bg-white rounded-md ps-4'>
            <input type='text' className='h-10 border-none outline-0' placeholder='Search task' />
            <i className="fi fi-rr-search h-10 text-black/60"></i>
        </div>
        <h2 className='text-black/60 text-[20px]'>{date}</h2>
        <div className='flex items-center'>
        <i className="fi fi-br-bell-ring text-2xl text-black/60  hover:text-black"></i>
        <button className='bg-white h-12 w-32 rounded-lg ms-6 text-black/60 hover:text-black'>+Create Event</button>
        </div>
    </div> 
  )
}
