import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const formData = JSON.parse(localStorage.getItem("page1_Data"));
  const Navigate = useNavigate();
  return (
    <div className="flex flex-col gap-8 items-center">
      <h1 className="text-center mt-14 text-2xl md:text-4xl font-bold">
        Please verify your email...
      </h1>
      <div className="flex ml-10 md:ml-0 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-40 rounded-[40px] text-gray-500"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-14 text-pink-500 -translate-x-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z" />
        </svg>
      </div>
      <h1 className="text-center text-xl text-gray-500">
        Please Verify your email address. We've sent a confirmation email to:{" "}
      </h1>
      <h1 className="text-center font-bold text-xl">{formData.email}</h1>
      <h1 className="text-center md:text-xl text-gray-500">
        Click the confirmation link in that email to begin using Dribble.
      </h1>
      <h1 className="text-center md:text-xl w-11/12 text-gray-500 md:w-[45%]">
        Didn't receive the email? Check your Spam folder, it may have been
        caught by a filter. if you still don't see it, you can{" "}
        <span
          onClick={() => {
            alert("Email was sent successfully");
          }}
          className="text-pink-500 font-semibold cursor-pointer"
        >
          {" "}
          resend the confirmation email.{" "}
        </span>{" "}
      </h1>
      <h1 className="text-center md:text-xl text-gray-500 md:w-[45%]">
        Wrong email address?
        <span
          onClick={() => {
            Navigate("/");
          }}
          className="text-pink-500 font-semibold cursor-pointer"
        >
          {" "}
          Change it.
        </span>{" "}
      </h1>
    </div>
  );
}

export default Home;
