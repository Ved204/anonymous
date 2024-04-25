import React from "react"
import "./../globals.css";

const testimg = "https://png.pngtree.com/png-clipart/20230916/original/pngtree-office-icon-illustration-vector-png-image_12265130.png";

export default function SignUp() {
    return (
        <div className="bg-[#212630] h-screen flex items-center justify-center">
        <div className=" text-center border-2 border-black bg-white min-h-[60vh] max-h-[60vh] max-w-[60vw] min-w-[60vw] rounded-3xl flex">
          <img src={testimg} alt="ExampleImage" className="w-[50%]"/>
          <div className=" items-center justify-center w-[50%] h-[59vh] flex mr-[8vw]">
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