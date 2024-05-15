import React, { useState } from "react"
import "./../globals.css";
import Navbar from "./../../components/layout/navbar";
import signupimg from "./../../public/sign-up.png";
import Image from 'next/image'

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    cpassword: ''
  });

  const handleChange = (e : any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e : any) => {
    e.preventDefault();

    if (formData.password !== formData.cpassword) {
      alert('Passwords do not match');
      return;
    }

    const response = await fetch('http://localhost:8000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: formData.username,
        email: formData.email,
        password: formData.password
      })
    });

    if (response.ok) {
      alert('User signed up successfully');
    } else {
      alert('Error signing up user');
    }
  };

  return (
    <div className="bg-[#212630] h-screen flex items-center justify-center px-5">
      <Navbar session={null}/>
      <div className="text-center border-2 border-black bg-white rounded-3xl flex overflow-hidden max-w-full h-auto my-auto">
        <Image src={signupimg} alt="ExampleImage" className="w-full max-w-md h-auto"/>
        <div className="flex flex-col justify-center p-6 w-full max-w-md mr-8">
          <form className="text-[#191970] text-center" onSubmit={handleSubmit}>
            <div className="p-3 text-lg">
              <label htmlFor="username">Username:</label> <br/>
              <input type="text" id="username" name="username" className="rounded-xl text-center" placeholder="Username" required onChange={handleChange} value={formData.username}/>
            </div>
            <div className="p-3 text-lg">
              <label htmlFor="email">Email:</label> <br/>
              <input type="email" id="email" name="email" className="rounded-xl text-center" placeholder="Email" required onChange={handleChange} value={formData.email}/>
            </div>
            <div className="p-3 text-lg">
              <label htmlFor="password">Password:</label> <br/>
              <input type="password" id="password" name="password" className="rounded-xl text-center" placeholder="Password" required onChange={handleChange} value={formData.password}/>
            </div>
            <div className="p-3 text-lg">
              <label htmlFor="cpassword">Password Confirmation:</label> <br/>
              <input type="password" id="cpassword" name="cpassword" className="rounded-xl text-center" placeholder="Confirm Password" required onChange={handleChange} value={formData.cpassword}/>
            </div>
            <button type="submit" className="p-3 text-lg">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}