import React from "react";
import logo from "./logo.png";
import icon from "./shopping-bag.png";
import cross from "./letter-x.png";
import Footer from "../Footer/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Home from "../Home/Home";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLogged = localStorage.getItem("isLogged") === "true";
  const formData = JSON.parse(localStorage.getItem("page2_Data"));
  const Navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("page2_Data");
    Navigate("/");
  };
  const [isSearchShow, setisSearchShow] = useState(true);

  return (
    <>
      {isLogged ? (
        <div className="  h-20 border-b-2 flex flex-wrap items-center gap-8 text-gray-500 font-semibold cursor-pointer">
          <img
            src={logo}
            alt=""
            className="h-6 ml-5 absolute left-20 transform -translate-x-1/2 sm:translate-x-0 sm:left-0 "
          />
          <ul className="md:flex flex-row hidden gap-8 ml-40">
            <li>Inspiration</li>
            <li>Find Work</li>
            <li>Learn Design</li>
            <li>Go Pro</li>
            <li>Hire Designers</li>
          </ul>

          <div className=" absolute right-60 flex items-center  md:mr-20 bg-gray-200 focus:w-72 rounded-md">
            {/* Search Icon */}
            <div className="flex items-center justify-center transition-all duration-500  transform">
              <label
                onClick={() => {
                  setisSearchShow(false);
                }}
                for="input"
                className="absolute flex md:hidden right-0 rounded-md  md:p-2 md:right-[105px] md:bg-black text-black md:border-0 translate-x-[120px] pointer"
              >
                <svg
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="w-5 h-5 border-0 np focus:w-72 rounded-md "
                >
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
                </svg>
              </label>
              <input
                type="text"
                placeholder="Search"
                class={`absolute md:flex top-10 md:top-0   md:relative rounded-md border-0 bg-gray-100 ${
                  isSearchShow ? "hidden" : "flex"
                } text-gray-400 p-1 pl-2 md:w-28 w-screen ml-28 md:ml-0 focus:bg-gray-200 focus:flex-1 focus:ring-0 md:transition-all md:duration-500 md:transform md:focus:w-72`}
              />

              <div></div>
            </div>
          </div>
          <img
            src={icon}
            alt=""
            className="absolute md:flex  hidden right-[14%]"
          />
          <div className="bg-gray-800 h-10 w-10 rounded-full absolute right-[10%]">
            <img src={formData} alt="" className="rounded-full h-10 w-10" />
          </div>
          <button
            onClick={handleLogout}
            className="bg-pink-500 h-10 w-28 text-white rounded-lg absolute right-10 md:flex md:items-center md:justify-center hidden"
          >
            Logout
          </button>
          {/* Hamburger Icon */}
          <div className="absolute left-5 md:hidden flex">
            <div
              className="cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-0.5 bg-gray-500 my-1"></div>
              <div className="w-6 h-0.5 bg-gray-500 my-1"></div>
              <div className="w-5 h-0.5 bg-gray-500 my-1"></div>
            </div>

            {/* Responsive Menu */}
            {isMenuOpen && (
              <div className="fixed w-[50%]  inset-0 bg-gray-800 bg-opacity-50 z-50 flex justify-end ">
                <div className="w-64 bg-white h-full flex flex-col  justify-start p-4">
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="absolute top-3 left-3 text-gray-500"
                  >
                    <img src={cross} alt="" className="h-8 w-10 text-black " />
                  </button>
                  <ul className="text-center mt-4 flex flex-col gap-5">
                    <li className="text-2xl text-black font-bold mb-4">Menu</li>
                    <li className="cursor-pointer">Inspiration</li>
                    <li className="cursor-pointer">Find Work</li>
                    <li className="cursor-pointer">Learn Design</li>
                    <li className="cursor-pointer">Go Pro</li>
                    <li className="cursor-pointer">Hire Designers</li>
                  </ul>

                  <button
                    onClick={handleLogout}
                    className="mt-auto bg-pink-500 text-white rounded-lg py-2"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        alert("Login Please Try Again Later")
      )}

      <Home />
      <Footer />
    </>
  );
}

export default Navbar;
