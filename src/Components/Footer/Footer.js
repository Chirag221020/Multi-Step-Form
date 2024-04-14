import React from "react";
import logo from "../Profile/logo.png";
import logo2 from "./logo2.png";

function Footer() {
  return (
    <div className=" overflow-hidden">
      <footer className="bg-gray-50 w-screen">
        <div>
          <div className=" py-6 lg:py-20 flex h-96 md:h-full flex-col md:flex-row md:gap-28 ">
            <div>
              <img
                src={logo}
                alt=""
                className="h-24 w-24  md:ml-12 ml-[35%] "
              />
              <h1 className="w-72 hidden  md:flex md:ml-10 ml-[35%] text-gray-400">
                Dribble is the world's leading community for ccreatives to
                share, grow and get hired.
              </h1>

              <div className="flex mt-4 justify-center mr-5 md:mr-20 md:mt-8 space-x-5 ">
                <a href="https://dribbble.com/" className="text-gray-600">
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Dribbble account</span>
                </a>

                <a
                  href="https://twitter.com/dribbble?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                  className="text-gray-600  "
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 17"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Twitter page</span>
                </a>

                <a
                  href="https://www.facebook.com/dribbble/"
                  className="text-gray-600 bg-gray-300 "
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 8 19"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Facebook page</span>
                </a>
                <a
                  href="https://www.instagram.com/dribbble/?hl=en"
                  className="text-gray-600  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    Instagram
                  </svg>
                </a>
                <a
                  href="https://in.pinterest.com/dribbble/"
                  className="text-gray-600  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    />
                    Pinterest
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex md:gap-32 mt-10 md:mt-0 cursor-pointer">
              <div className=" md:w-50 w-92  ">
                <h2 className="mb-6 text-sm font-bold text-black uppercase w-36 md:w-full ml-4 md:ml-0 ">
                  For designers
                </h2>
                <ul className="hidden md:flex flex-col text-gray-400">
                  <li className="mb-4">
                    <span className=" ">Go Pro!</span>
                  </li>
                  <li className="mb-4">
                    <span className="">Explore design work</span>
                  </li>
                  <li className="mb-4">
                    <span className="">Design blog</span>
                  </li>
                  <li className="mb-4">
                    <span className="">Overtime podcast</span>
                  </li>
                  <li className="mb-4">
                    <span className="">Playoffs</span>
                  </li>
                  <li className="mb-4">
                    <span className="">Weekly Warm-Up</span>
                  </li>
                  <li className="mb-4">
                    <span className="">Refer a Friend</span>
                  </li>
                  <li className="mb-4">
                    <span className="">Code of conduct</span>
                  </li>
                </ul>
              </div>
              {/* 2nd Line */}
              <div>
                <h2 className="mb-6 text-sm font-bold uppercase text-black w-36 md:w-full">
                  Help center
                </h2>
                <ul className="hidden md:flex flex-col text-gray-400 ">
                  <li className="mb-4">
                    <span className="">Post a job opening</span>
                  </li>
                  <li className="mb-4">
                    <span className="">Post a freelance project</span>
                  </li>
                  <li className="mb-4">
                    <span className="">Search for designers</span>
                  </li>
                </ul>
                <div>
                  <h2 className="mb-4 text-sm font-bold uppercase text-black -ml-36 md:ml-0">
                    Brands
                  </h2>
                  <ul className="hidden md:flex flex-col text-gray-400 ">
                    <li className="mb-4">
                      <span className="">Advertise with us</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* 3rd Line */}
              <div>
                <h2 className="mb-6 text-sm font-bold uppercase text-black -translate-x-5 md:translate-x-0  w-36 md:w-full">
                  Company
                </h2>
                <ul className="text-gray-400 hidden md:flex flex-col">
                  <li className="mb-4">
                    <span className="">About</span>
                  </li>
                  <li className="mb-4">
                    <span className="">Careers</span>
                  </li>
                  <li className="mb-4">
                    <span className="">Support</span>
                  </li>
                  <li className="mb-4">
                    <span className="">Media kit</span>
                  </li>
                  <li className="mb-4">
                    <span className="">Testimonials</span>
                  </li>
                  <li className="mb-4">
                    <span className="">API</span>
                  </li>
                  <li className="mb-4">
                    <span className="">Terms of service</span>
                  </li>
                  <li className="mb-4">
                    <span className="">Privacy policy</span>
                  </li>
                  <li className="mb-4">
                    <span className="">Cookie policy</span>
                  </li>
                </ul>
              </div>
              {/* fifth Line */}
              <div>
                <h2 className="mb-6 text-sm font-bold uppercase text-black mt-[44px] md:mt-0  md:ml-0 -ml-[350px]">
                  Directories
                </h2>
                <ul className=" text-gray-400 hidden md:flex flex-col">
                  <li className="mb-4">
                    <span className="">Design jobs</span>
                  </li>
                  <li className="mb-4">
                    <span className="">Designers for hire</span>
                  </li>
                  <li className="mb-4">
                    <span className="">Freelance designers for hire</span>
                  </li>
                  <li className="mb-4">
                    <span className="">Tags</span>
                  </li>
                  <li className="mb-4">
                    <span className="">Places</span>
                  </li>
                </ul>
                <div>
                  <h2 className="mb-6 text-sm font-bold uppercase text-black w-36 md:w-full md:ml-0 -ml-[300px]">
                    Design assets
                  </h2>
                  <ul className="hidden md:flex flex-col text-gray-400">
                    <li className="mb-4">
                      <span className="">Dribble Marketplace</span>
                    </li>
                    <li className="mb-4">
                      <span className="">Creatice Marketplace</span>
                    </li>
                    <li className="mb-4">
                      <span className="">Fontspring</span>
                    </li>
                    <li className="mb-4">
                      <span className="">Font Squirrel</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* sixth Line */}
              <div>
                <h2 className="mb-6 text-sm font-bold uppercase text-black text-center w-40 md:w-full  mt-[44px] md:mt-0  md:-ml-4 -ml-[228px] ">
                  Design Resources
                </h2>
                <ul className=" text-gray-400 hidden md:flex flex-col">
                  <li className="mb-4">
                    <span className="">Freelancing</span>
                  </li>
                  <li className="mb-4">
                    <span className="">Design Hiring</span>
                  </li>
                  <li className="mb-4">
                    <span className="">Design Portfolio</span>
                  </li>
                  <li className="mb-4">
                    <span className="">Design Education</span>
                  </li>
                  <li className="mb-4">
                    <span className="">Creative Process</span>
                  </li>
                  <li className="mb-4">
                    <span className=""> Design Industry Trends</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t-2 border-l-0 border-r-0 border-b-0 md:mr-20 ml-32 -translate-x-28 md:translate-x-0 md:ml-20 px-4 w-[90%] overflow-hidden  py-6 bg-gray-50  md:flex md:items-center md:justify-between">
            <span className="text-sm sm:text-center ml-14 md:ml-0">
              © 2023 <span href="https://dribbble.com/">Dribble</span>. All
              Rights Reserved.
            </span>
            <img
              src={logo2}
              alt=""
              className="absolute right-0 h-5 w-5 hidden md:flex flex-col "
            />
            <h1 className=" md:flex gap-2 hidden mr-2">
              {" "}
              <span className="font-bold ">20,5001,853</span> shots dribbled
            </h1>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
