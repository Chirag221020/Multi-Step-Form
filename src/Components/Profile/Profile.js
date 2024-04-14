import React, { useRef, useState } from "react";
import pic from "../Profile/upload.png";
import logo from "../Profile/logo.png";
import { useNavigate } from "react-router-dom";
function Profile() {
  // Button effect

  const [inputValue, setInputValue] = useState("");
  // const [isInputEmpty, setIsInputEmpty] = useState(true);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    // setIsInputEmpty(e.target.value == "");
  };
  // set profile
  const inputRef = useRef(null);
  const [image, setImage] = useState(null);
  const handleImageClick = () => {
    inputRef.current.click();
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    // const reader = new FileReader();
    setImage(file);
  };
  // Page Next
  const Navigate = useNavigate();
  const PageNext = (e) => {
    e.preventDefault();
    const imageURL = URL.createObjectURL(image);
    localStorage.setItem("page2_Data", JSON.stringify(imageURL));
    Navigate("/Page3");
  };
  //  Page Back
  const PageBack = (e) => {
    e.preventDefault();
    Navigate("/Page1");
  };

  return (
    <div>
      <img src={logo} alt="" className="h-32 w-32  md:ml-12 ml-[35%] " />

      <div className="flex justify-center">
        <form action="" onSubmit={PageNext}>
          <h1 className="md:text-4xl text-3xl ml-2 md:ml-0 font-extrabold">
            Welcome! Let's create your profile
          </h1>
          <h2 className="mt-2 ml-2 md:ml-0 text-sm md:text-base text-gray-500 font-medium">
            Let other get to know you better! You can do these later
          </h2>
          {/* Profile Image */}
          <div className="bg flex flex-row items-center">
            <div className=" md:w-50 ">
              <h1 className="mt-20 ml-5 md:ml-0 w-[90%] md:w-[100%] font-bold md:text-2xl text-lg">
                Add an Avatar
              </h1>
              <div
                className="mt-5 md:ml-0 ml-5 h-32 w-32 md:h-48 flex items-center md:w-48 rounded-full border-dashed border-4 border-gray-300 cursor-pointer"
                onClick={handleImageClick}
              >
                {/* <img src={pic} alt="" className="h-14 w-14 ml-16" /> */}
                {image ? (
                  <img
                    src={URL.createObjectURL(image)}
                    alt=""
                    className="h-[105%] w-full rounded-full"
                  />
                ) : (
                  <img
                    src={pic}
                    alt=""
                    className="h-8 w-8 ml-12 md:ml-[75px]"
                  />
                )}

                <input
                  type="file"
                  className="hidden"
                  ref={inputRef}
                  onChange={handleImageChange}
                />
              </div>
            </div>
            <div className=" h-48 mt-[20%] w-[80%]">
              <div
                className="md:ml-16 ml-5 md:mt-0 mt-[35%] text-center md:font-bold font-semibold text-sm  border-solid border-2 border-gray-300 h-12 w-36 md:rounded-xl rounded-[30px] leading-10 cursor-pointer"
                onClick={handleImageClick}
              >
                {" "}
                Choose Image{" "}
              </div>
              <h1
                className="md:ml-16  mt-8 font-semibold text-gray-400 cursor-pointer "
                onClick={handleImageClick}
              >
                {" "}
                <span className="md:text-2xl text-xl">{">"}</span> Or choose one
                of our defaults
              </h1>
            </div>
          </div>
          {/* Location Input */}
          <h1 className="md:mt-20 ml-5 md:ml-0 mt-24 font-bold md:text-2xl text-xl">
            Add your location
          </h1>
          <input
            required
            type="text"
            placeholder="Enter a location"
            className="md:mt-10 mt-4 md:ml-0 ml-2 h-12 md:w-full w-11/12  border-gray-200 text-xl border-t-0 
            border-l-0 border-r-0  border-b-2 focus:border-pink-500  transition-colors duration-500 ease-in-out
            p-3 focus:outline-none focus:ring-0"
            onChange={handleInputChange}
          />
          {/* Button */}
          <button
            className={`mt-20 h-12 md:ml-0 ml-[55%] w-2/5 pr-4 md:rounded-lg rounded-[40px]  p-2 text-lg  ${
              inputValue
                ? "bg-pink-600 hover:bg-pink600"
                : "bg-pink-200 hover:bg-pink-300"
            } transition-colors duration-300 ease-in-out text-white`}
            type="submit"
          >
            Next
          </button>
          <h1 className="mt-2 md:ml-0 ml-[55%] text-center text-gray-400 font-bold w-2/5">
            or Press{" "}
            <a href="/return" onClick={PageBack}>
              RETURN
            </a>
          </h1>
        </form>
      </div>
    </div>
  );
}

export default Profile;
