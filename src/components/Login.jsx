import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import illustration from '../images/illustration.svg'
const Login = () => {
  return (
    <div className=" max-h-screen w-full md:max-w-[85rem] mx-auto flex-col pt-[6rem] md:pt-10 justify-center md:flex-row flex  px-4">
    <div className=" basis-3/6 flex flex-col items-center justify-center">
      <form className="flex flex-col w-full md:w-[27rem] p-1 rounded-lg">
        <div className="flex flex-col gap-3 ">
          <p className="font-lexend text-xl font-medium text-gray-800 ">
            Sign In to Your Account
          </p>
          <h6 className="font-lexend text-sm mb-9">
            Don't have an account ?
            <a className="underline text-blue-500" href="">
              Sign Up
            </a>
          </h6>
        </div>
        <label className="font-lexend mb-3 text-sm">Email Address</label>
        <input className="py-2 px-3 rounded-md border focus:outline-blue-400 focus:bg-white placeholder-gray-200 text-sm border-gray-200 bg-gray-50 mb-7" />
        <label className="font-lexend mb-3 text-sm">Password</label>
        <input
          className="p-2 focus:outline-blue-400 focus:bg-white rounded-md border border-gray-200 bg-gray-50"
          type="password"
        />
        <button className="bg-blue-600 text-white hover:ring-2  h-10 rounded-full font-jost w-full mt-8 flex items-center justify-center gap-2">
          Sign In <BsArrowRight className="font-semibold" />
        </button>
      </form>
    </div>
    <div className=" flex-col p-4 hidden  md:hidden lg:flex  gap-2.5 basis-3/6 items-center justify-center ">
      <img src={illustration}alt='Login Image'/>
    </div>
  </div>
  )
}

export default Login