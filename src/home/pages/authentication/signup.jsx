import React, { useState } from "react";
import { FaGoogle, FaApple, FaEye, FaEyeSlash } from "react-icons/fa";
import { GoLock } from "react-icons/go";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-black.png";

function SignUp() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div>
      <div className="flex ">
        <img src={logo} height={200} width={200} />
      </div>
      <div className="w-11/12 sm:w-1/2 md:w-1/2 flex justify-center flex-col m-auto text-center mt-0">
        <div className="text-3xl font-bold text-[#000B18]">Register</div>
        <div className="text-md text-[#000B18] pt-2 font-semibold">
          Create Your Free Account
        </div>
        {/* //#Different Login Buttons */}
        <div className="flex flex-col sm:flex-row justify-center mt-14 w-11/12 sm:w-9/12 m-auto gap-4">
          <div className="bg-[#f285da9f] px-4 py-2 rounded-md text-[#000B18] text-sm font-medium flex flex-row gap-2 items-center justify-center">
            <FaGoogle />
            <button>Login with Google</button>
          </div>
          {/* <div className="bg-[#f285da9f] px-4 py-2 rounded-md text-[#000B18] text-sm font-medium flex flex-row gap-2 items-center justify-center">
            <FaApple size={20} />
            <button>Login with Apple</button>
          </div> */}
        </div>
        <div className="relative mt-12">
          <div className="border-b-2 border-gray-300"></div>
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-white px-4 text-sm font-medium">
            OR
          </div>
        </div>
        {/* //#Form */}
        <form
          className="flex flex-col gap-4 mt-12"
          // onSubmit={handleSubmit(onSubmit)}
        >
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#77045f]">
              @
            </span>
            <input
              type="email"
              placeholder="Your UserName"
              // {...register("email")}
              className="pl-8 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#77045f]"
            />
          </div>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#77045f]">
              @
            </span>
            <input
              type="email"
              placeholder="Your Email"
              // {...register("email")}
              className="pl-8 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#77045f]"
            />
          </div>

          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#77045f]">
              <GoLock />
            </span>
            <span
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#77045f] cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? <FaEye /> : <FaEyeSlash />}
            </span>
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Create Password"
              className="pl-8 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#77045f]"
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-start text-sm mt-2">
            <div className="flex text-left">
              <input type="checkbox" className="mr-2 p-" /> By continuing, you
              accept our Terms of Use, our Privacy Policy. You confirm you are
              at least 16 years old (13 if you are an authorized Classrooms
              user).
            </div>
          </div>
          <div
            type="submit"
            className="text-white bg-[#77045f] p-2 rounded-md mt-4 cursor-pointer"
          >
            Sign In
          </div>
          <div className="mt-3">
            <div>
              Already have an account?
              <Link
                to={"/signin"}
                className="text-[#77045f] cursor-pointer ml-2"
              >
                Log In
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
