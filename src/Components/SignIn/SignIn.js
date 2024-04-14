import React from "react";
import { useState } from "react";
import pic from "../SignIn/cover.jpg";
import logo from "./logo.png";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const Navigate = useNavigate();
  const PageNext = (e) => {
    e.preventDefault();
    localStorage.setItem("page1_Data", JSON.stringify(formData));
    Navigate("/Page2");
  };
  const [formData, setformData] = useState({});
  const handleChangeformData = (e) => {
    const { name, value } = e.target;
    setformData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  return (
    <div className="overflow-hidden justify-center items-center  h-screen w-screen md:flex md:flex-column md:overflow-hidden">
      {/* Image */}
      <div className="hidden md:h-screen md:w-[38%] md:bg-gradient-to-r md:from-custom-600 md:to-custom-300 md:flex md:justify-center md:items-center md:flex-col ">
        <div className="bg-gradient-to-r font-extrabold text-4xl from-custom-400 to-custom-200 w-full h-[15%] pb-24 trans ">
          <img
            src={logo}
            alt=""
            className="-translate-y-5 h-32 w-34 md:ml-10 "
          />
          <h1 className=" -translate-y-20 text-center mr-14 mt-12 text-custom-900">
            Discover the world's top Designers & Creatives.
          </h1>
        </div>
        <img
          src={pic}
          alt="pic"
          className="h-[75%] mb-28 w-full shadow-custom-200"
        />
      </div>
      {/* Form */}
      <form
        onSubmit={PageNext}
        className="  md:h-screen md:w-4/6 md:flex md:flex-col md:items-center"
      >
        <h1 className="font-bold text-2xl w-80 md:w-screen text-center md:text-4xl md:mt-36 mt-[10%] md:mr-[12%] mr-[60%]">
          Sign up To Dribble{" "}
        </h1>
        {/* Type */}

        <div className="flex flex-col w-[83%] md:flex-row mt-12 ml-10 md:ml-0 gap-10 md:w-[40%]">
          <div>
            <h1 className="md:text-xl text-lg font-bold md:mb-1">Name</h1>
            <input
              name="name"
              required
              type="text"
              onChange={handleChangeformData}
              placeholder="Name"
              className="md:h-12 h-12 md:w-[105%] w-[100%]  pr-4 md:pr-6 pt-5 pb-5 rounded-lg bg-gray-200 p-3 outline-none border-white
              focus:ring-0 focus-within:border-white"
            />
          </div>
          {/* Username */}
          <div>
            <h1 className="md:text-xl text-lg font-bold md:mb-1">Username</h1>
            <input
              name="userName"
              required
              type="text"
              onChange={handleChangeformData}
              placeholder="Username"
              className="md:h-12 h-12 md:w-[105%] w-[100%]  pr-4 md:pr-6 pt-5 pb-5 rounded-lg bg-gray-200 p-3 outline-none border-white
              focus:ring-0 focus-within:border-white"
            />
          </div>
        </div>
        {/* Email and Password */}
        <div className="mt-12 ml-10 md:ml-0 md:w-2/5">
          <h1 className="md:text-xl text-lg font-bold md:mb-1">Email</h1>
          <input
            name="email"
            required
            type="email"
            onChange={handleChangeformData}
            placeholder="Email"
            className="md:h-12 md:w-[103%] w-11/12 pr-4 rounded-lg 
            border-white
            bg-gray-200 p-3 outline-none focus:ring-0 focus-within:border-white"
          />
          {/* Password */}
          <div className="mt-12 w-full">
            <h1 className="md:text-xl text-lg font-bold md:mb-1">Password</h1>
            <input
              name="password"
              required
              type="password"
              onChange={handleChangeformData}
              placeholder="6+ Character"
              className="md:h-12 md:w-[103%] w-11/12 pr-4 rounded-lg 
              border-white
              bg-gray-200 p-3 outline-none focus:ring-0 focus-within:border-white"
            />
          </div>
        </div>
        {/* check box */}
        <div className=" mt-10 h-10 md:w-2/5 ml-10 md:ml-0 flex gap-2">
          <input
            type="checkbox"
            placeholder="hello"
            className="mt-1 md:mt-0 focus:ring-0 w-5 h-5 border-gray-300 md:w-6 md:h-6
            md:focus:ring-0 "
            required
          />
          <span className="mb-4 md:text-lg text-base text-slate-500">
            {" "}
            Creating an account means you're okay with our{" "}
            <a href="https://dribbble.com/terms" className="text-blue-700">
              Terms of Service
            </a>
            ,
            <a href="https://dribbble.com/privacy" className="text-blue-700">
              Privacy Policy
            </a>{" "}
            and default{" "}
            <a
              href="https://dribbble.com/notifications"
              className="text-blue-700"
            >
              Notification Settings.
            </a>
          </span>
        </div>
        {/* Submit */}
        <div className="md:mt-16 h-20 md:flex flex mt-10 flex-wrap w-[90%] md:ml-0 ml-5 items-center  md:w-2/5 ">
          <button
            className="h-12 md:w-[40%] w-screen  pr-4 rounded-lg  p-2  bg-pink-500 text-white text-lg"
            type="submit"
            // onClick={PageNext}
          >
            {" "}
            Create Account
          </button>
        </div>
        {/* Privacy Policy */}
        <div className="mb-4 mt-[2%] w-[85%] md:w-[35%] md:mt-4 md:ml-[30%] ml-[10%] mr-[35%] text-slate-500 md:text-base text-xs">
          <h1>
            {" "}
            This site is protected by reCAPTCHA and the Google{" "}
            <a
              href="https://www.google.com/recaptcha/about/"
              className="text-blue-700"
            >
              Privacy Policy
            </a>{" "}
            and{" "}
            <a
              href="https://policies.google.com/terms?hl=en-US"
              className="text-blue-700"
            >
              Terms of Service
            </a>{" "}
            apply.
          </h1>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
