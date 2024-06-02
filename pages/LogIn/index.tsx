import React from "react";
import "./../globals.css";
import Image from 'next/image';
import signupimg from "./../../public/sign-up.png";

interface LoggingInProps {
  setText: (text: string) => void;
}

export default function LoggingIn(props: any) {

  const handleSubmit = async (event: any) => {
    event.preventDefault();
  };

  return (
    <div className="text-center border-2 border-black bg-[#13131f] rounded-3xl flex overflow-hidden max-w-full h-auto my-auto">
      <Image src={signupimg} alt="ExampleImage" className="w-full max-w-md h-auto" />
      <div className="flex flex-col justify-center p-6 w-full max-w-md mr-2 ">
        <form className="text-white text-center" onSubmit={handleSubmit}>
          <div className="p-3 text-lg">
            <label htmlFor="username">Username:</label> <br />
            <input type="text" id="username" name="username" className="rounded-xl text-center" placeholder="Username" required />
          </div>
          <div className="p-3 text-lg">
            <label htmlFor="pass">Password:</label> <br />
            <input type="text" id="pass" name="pass" className="rounded-xl text-center" placeholder="Password" required />
          </div>
          <div className="flex justify-between w-full p-2">
            <button
              type="button"
              onClick={() => props.setText('Signup')}
              className="rounded-full bg-blue-500 px-4 py-1 font-bold text-white hover:bg-blue-700 mr-1"
            >
              Sign Up
            </button>
            <button
              type="submit"
              className="rounded-full bg-blue-500 px-4 py-1 font-bold text-white hover:bg-blue-700 ml-1"
            >
              Log In to Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
