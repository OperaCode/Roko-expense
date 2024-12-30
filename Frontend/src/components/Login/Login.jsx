import React from 'react'
import background from "../assets/login-bg.jpg"

const Login = () => {
  return (
    <main className='bg-[url(../assets/login-bg.jpg)]' >

      <div className='flex justify-between'>
        <p><span></span>Back to home page</p>

        <h1 className='font-bold text-2xl'>Welcome Back!</h1>
        <h3>Login to make seamless transaction records effortlessly</h3>
        
        <p>New to Roko ?</p>
        <button>Sign up</button>

      </div>

      <div >
        <form action="" className='flex flex-col'>
          <label htmlFor="email">Email Address</label>
          <input type="email" required />
          <label htmlFor="password">Password</label>
          <input type="password" required/>
        </form>
      </div>
    
    </main>
  )
}

export default Login