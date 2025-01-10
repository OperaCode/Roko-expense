import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const PasswordInput = ({placeholder, id, name}) => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => {
        setShowPassword(!showPassword)
    }

  return (
    <div className=''>
        <input type={showPassword ? 'text' : 'password'} placeholder={placeholder} id={id} required name={name} className="bg-indigo-100 p-2 rounded-md border-b border-indigo-900 w-full"/>
        <div className="-mt-8 right-44 absolute flex justify-end cursor-pointer " onClick={togglePassword}>
            {showPassword ? (<AiOutlineEyeInvisible size={20}/>) : (<AiOutlineEye size={20}/>)}
        </div>
    </div>
  )
}

export default PasswordInput