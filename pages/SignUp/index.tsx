import React from "react"
import "./../globals.css";

const testimg = "https://png.pngtree.com/png-clipart/20230916/original/pngtree-office-icon-illustration-vector-png-image_12265130.png";

export default function SignUp() {
    return (
        <div className="bg-[#212630] h-screen flex items-center justify-center">
        <div className="mx-auto text-center border-2 border-black text-red-300 bg-white min-h-[60vh] max-h-[60vh] max-w-[60vw] min-w-[60vw] rounded-3xl flex">
          <img src={testimg} alt="ExampleImage" className="w-[50%]"/>
          <div className="h-auto max-h-[20%] flex items-center justify-center m-auto ">
            <form className="mx-auto text-[#191970] text-center my-auto">
              <div className="p-3 text-lg min-w-[15vw]">
                <label htmlFor="Fname">Username:</label> <br/>
                <input type="text" id="username" name="username" className="rounded-xl text-center w-[100%]" placeholder="Username" required/>
              </div>
              <div className="p-3 text-lg">
                <label htmlFor="Email">Email:</label> <br/>
                <input type="email" id="email" name="email" className="rounded-xl text-center w-[100%]" placeholder="Email" required/>
              </div>
              <div className="p-3 text-lg">
                <label htmlFor="Password">Password:</label> <br/>
                <input type="password" id="password" name="password" className="rounded-xl text-center w-[100%]" placeholder="Password" required/>
              </div>
              <div className="p-3 text-lg">
                <label htmlFor="Cpassword">Password Confirmation:</label> <br/>
                <input type="password" id="cpassword" name="cpassword" className="rounded-xl text-center w-[100%]" placeholder="Confirm Password" required/>
              </div>
              <button type="submit" className="p-3 text-lg">Login</button>
            </form>
          </div>
        </div>
      </div>
      
    )
}