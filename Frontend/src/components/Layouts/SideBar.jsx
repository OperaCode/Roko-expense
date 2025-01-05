import React from 'react'
import Rokologo from "../../assets/Roko-logo.png"

const SideBar = () => {
  return (
    <div className='bg-indigo-600 p-20 w-1/3 border border-solid border-slate-800 h-screen '>
      <div className='mb-20'>
        <h1 className='text-5xl font-bold'>{Rokologo}</h1>
      </div>

      <div>
        <ul className='text-white text-3xl space-y-7 font-semibold'>
          <li>DashBoard</li>
          <li>Expenses</li>
          <li>Invoice</li>
          <li>Profile Settings</li>
        </ul>
      </div>
      
    </div>
  )
}

export default SideBar