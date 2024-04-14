import React from "react";
import logo from "../Profile/logo.png";
import { useRef, useState } from "react";
import card1 from "./card1.png";
import card2 from "./card2.png";
import card3 from "./card3.png";
import { useNavigate } from "react-router-dom";

function Options() {
  const [isClicked, setIsClicked] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const [isClicked3, setIsClicked3] = useState(false);

  // Card Effect

  const [isExpand, setIsExpand] = useState(false);
  const ImageRef = useRef(null);
  const handleImageClick = () => {
    ImageRef.current.click();
  };
  // Card 2
  const [isExpand2, setIsExpand2] = useState(false);
  const ImageRef2 = useRef(null);
  const handleImageClick2 = () => {
    ImageRef2.current.click();
  };
  // Card 3
  const [isExpand3, setIsExpand3] = useState(false);
  const ImageRef3 = useRef(null);
  const handleImageClick3 = () => {
    ImageRef3.current.click();
  };
  // Button Effect
  const [isChecked, setisChecked] = useState("");
  const handleCheckChange = (e) => {
    setisChecked(e.target.value);
  };
  // Clear Effect
  // const [isValue, setisValue] = useState("");
  // const handleClear = () => {
  //   // Reset state variables to initial values
  //   setisValue("");
  //   // Reset other state variables as needed
  // };
  // Page Back

  const Navigate = useNavigate();
  const PageBack = (e) => {
    e.preventDefault();
    Navigate("/Page2");
  };
  const logIn = () => {
    localStorage.setItem("isLogged", "true");
    Navigate("/home");
  };

  return (
    <div className="flex md:flex-row flex-col gap-16 overflow-hidden">
      {/* Logo */}{" "}
      <div className="flex md:gap-20 ">
        <div className="h-28 w-28">
          <img src={logo} alt="" className="h-32 w-34 md:ml-18 ml-40 " />
        </div>
        {/* Back Button */}
        <div className=" h-28 -translate-x-20 md:translate-x-24  ">
          <button
            onClick={PageBack}
            className="mt-9 bg-gray-200 md:h-16 md:w-16 h-12 w-12 font-bold text-2xl rounded-lg  text-gray-500"
          >
            {"<"}
          </button>
        </div>
      </div>
      {/* Form */}
      <div className="flex flex-col justify-center items-center w-full h-full -mt-10 md:mt-36 md:mr-[15%] ">
        <div>
          <h1 className="md:text-4xl text-2xl font-bold text-center">
            What brings you to Dribble ?
          </h1>
          <h2 className=" text-center mt-4 md:ml-0 md:mr-0 ml-4 mr-4 text-gray-500 font-medium md:text-base text-sm">
            Select the options that best describe you. Don't worry, you can
            explore other options later.
          </h2>
        </div>
        {/* Profile Containers */}
        <div
          className="flex justify-center md:flex-row flex-col md:gap-20"
          onChange={handleCheckChange}
        >
          {/* Card 1 */}
          <div
            onClick={() => setIsClicked(true)}
            onBlur={() => setIsClicked(false)}
            tabIndex={0} // Adding tabIndex makes the div focusable
            className={`flex flex-col items-center justify-center h-80 w-80 rounded-2xl mt-28 border-2 border-gray-200 cursor-pointer  outline-none transition-colors duration-300 ease-in-out   ${
              isClicked ? "border-pink-500" : ""
            }
          `}
          >
            <div
              onClick={() => setIsExpand(true)}
              onBlur={() => setIsExpand(false)}
              tabIndex={0}
              className={`flex flex-col  justify-center items-center -translate-y-4   ${
                isExpand ? "-translate-y-[24%] duration-300 ease-in-out" : ""
              }`}
            >
              <div className=" h-44" onClick={handleImageClick}>
                <img src={card1} alt="" className="h-48 " />
              </div>
              <div>
                <h1
                  className="font-bold text-center text-xl focus
:-translate-y-24"
                >
                  I'm a designer looking to share my work
                </h1>{" "}
              </div>
              <h1
                className={`w-72 text-gray-400 text-center font-normal text-lg translate-y-5 opacity-${
                  isExpand ? "1" : " hidden"
                } transition duration-700 ease-in-out`}
              >
                With over 7 million shots from a vast community of designers,
                Dribble is leading source for design inspiration
              </h1>
            </div>

            <input
              type="radio"
              name="card"
              // value={isValue}
              className={`h-6 w-6 mt-3 rounded-full outline-none text-pink-500 cursor-pointer focus:ring-0 ${
                isExpand ? "-translate-y-14" : ""
              }`}
              ref={ImageRef}
            />
          </div>

          {/* Card 2 */}
          <div
            onClick={() => setIsClicked2(true)}
            onBlur={() => setIsClicked2(false)}
            tabIndex={0} // Adding tabIndex makes the div focusable
            className={`flex flex-col items-center justify-center h-80 w-80 rounded-2xl mt-28 border-2 border-gray-200 cursor-pointer outline-none transition-colors duration-300 ease-in-out
            ${isClicked2 ? "border-pink-500" : ""}`}
          >
            <div
              onClick={() => setIsExpand2(true)}
              onBlur={() => setIsExpand2(false)}
              tabIndex={0}
              className={`flex flex-col  justify-center items-center -translate-y-4   ${
                isExpand2 ? "-translate-y-[24%] duration-300 ease-in-out" : ""
              }`}
            >
              <div className=" h-44" onClick={handleImageClick2}>
                <img src={card2} alt="" className="h-48 " />
              </div>
              <div>
                <h1
                  className="font-bold text-center text-xl focus
:-translate-y-24"
                >
                  I'm a designer looking to share my work
                </h1>{" "}
              </div>
              <h1
                className={`w-72 text-gray-400 text-center font-normal text-lg translate-y-5 opacity-${
                  isExpand2 ? "1" : " hidden"
                } transition duration-700 ease-in-out`}
              >
                With over 7 million shots from a vast community of designers,
                Dribble is leading source for design inspiration
              </h1>
            </div>

            <input
              type="radio"
              name="card"
              className={`h-6 w-6 mt-3 rounded-full outline-none text-pink-500 cursor-pointer focus:ring-0 ${
                isExpand2 ? "-translate-y-14" : ""
              }`}
              ref={ImageRef2}
            />
          </div>

          {/* Card 3 */}
          <div
            onClick={() => setIsClicked3(true)}
            onBlur={() => setIsClicked3(false)}
            tabIndex={0} // Adding tabIndex makes the div focusable
            className={`flex flex-col items-center justify-center h-80 w-80 rounded-2xl mt-28 border-2 border-gray-200 cursor-pointer  outline-none transition-colors duration-300 ease-in-out
            ${isClicked3 ? "border-pink-500" : ""}`}
          >
            <div
              onClick={() => setIsExpand3(true)}
              onBlur={() => setIsExpand3(false)}
              tabIndex={0}
              className={`flex flex-col  justify-center items-center -translate-y-4   ${
                isExpand3 ? "-translate-y-[24%] duration-300 ease-in-out" : ""
              }`}
            >
              <div className=" h-44" onClick={handleImageClick3}>
                <img src={card3} alt="" className="h-48 " />
              </div>
              <div>
                <h1
                  className="font-bold text-center text-xl focus
:-translate-y-24"
                >
                  I'm a designer looking to share my work
                </h1>{" "}
              </div>
              <h1
                className={`w-72 text-gray-400 text-center font-normal text-lg translate-y-5 opacity-${
                  isExpand3 ? "1" : " hidden"
                } transition duration-700 ease-in-out`}
              >
                With over 7 million shots from a vast community of designers,
                Dribble is leading source for design inspiration
              </h1>
            </div>

            <input
              type="radio"
              name="card"
              className={`h-6 w-6 mt-3 rounded-full outline-none text-pink-500 cursor-pointer focus:ring-0 ${
                isExpand3 ? "-translate-y-14" : ""
              }`}
              ref={ImageRef3}
            />
          </div>
        </div>
        {/* Button */}
        <div>
          <h1 className="md:mt-16 mt-5 font-bold text-lg tracking-tight text-center">
            Anything else? You can select multiple
          </h1>
          <div className="flex justify-center mt-5">
            <button
              onClick={logIn}
              className={`item-center text-center md:mt-5 h-12 mb-5 md:mb-0 rounded-lg w-56 text-lg pr-4 ${
                isChecked
                  ? "bg-pink-600 hover:bg-pink600"
                  : "bg-pink-200 hover:bg-pink-300"
              }transition-colors duration-300 ease-in-out text-white`}
            >
              Finish
            </button>
          </div>
          <h1
            className={`mt-2 md:flex justify-center hidden w-full text-center text-gray-400 font-bold op opacity-${
              isChecked ? "1" : " hidden"
            }`}
          >
            or Press <a href="/return">RETURN</a>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Options;
