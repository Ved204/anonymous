import React from "react"
import "./../globals.css";
import Navbar from "./../../components/layout/navbar";
import signupimg from "./../../public/Signup.png";
import Image from 'next/image'
const testimg = "https://png.pngtree.com/png-clipart/20230916/original/pngtree-office-icon-illustration-vector-png-image_12265130.png";

export default function SignUp() {
    return (
      <div className="bg-[#212630] h-screen flex items-center justify-center px-5">
        <Navbar session={null}/>
        <div className="text-center border-2 border-black bg-white rounded-3xl flex overflow-hidden max-w-full h-auto my-auto">
          {/* <img src={testimg} alt="ExampleImage" className="w-full max-w-md h-auto"/> */}
          <Image src={signupimg} alt="ExampleImage" className="w-full max-w-md h-auto"/>
          <div className="flex flex-col justify-center p-6 w-full max-w-md mr-8">
            <form className=" text-[#191970] text-center ">
              <div className="p-3 text-lg">
                <label htmlFor="Fname">Username:</label> <br/>
                <input type="text" id="username" name="username" className="rounded-xl text-center " placeholder="Username" required/>
              </div>
              <div className="p-3 text-lg">
                <label htmlFor="Email">Email:</label> <br/>
                <input type="email" id="email" name="email" className="rounded-xl text-center" placeholder="Email" required/>
              </div>
              <div className="p-3 text-lg">
                <label htmlFor="Password">Password:</label> <br/>
                <input type="password" id="password" name="password" className="rounded-xl text-center" placeholder="Password" required/>
              </div>
              <div className="p-3 text-lg">
                <label htmlFor="Cpassword">Password Confirmation:</label> <br/>
                <input type="password" id="cpassword" name="cpassword" className="rounded-xl text-center " placeholder="Confirm Password" required/>
              </div>
              <button type="submit" className="p-3 text-lg">Login</button>
            </form>
          </div>
        </div>
      </div>
      
    )
}