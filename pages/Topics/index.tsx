import React from "react";
import "./../globals.css";
import Card from "@/components/home/card";
import Form from "platforms/components/form";
import NavBar from "@/components/layout/navbar";


export default function TopicsForm() {
    //
    
    return(
        
        <div>

        <div className="bg-[#212630] min-h-screen flex items-center justify-center">
              <div className="container bg-[#161a21] md:w-1/2 p-4 rounded-md shadow-lg">
                <h1 className="text-xl font-bold text-white mb-4">Create a New Topic</h1>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="title" className="block text-sm font-medium text-gray-300">Topic</label>
                            <input
                            placeholder="The topic you'd like to create under the parent topic such as a specific video game or specific musical artist"
                            type="text"
                            name="title"
                            id="title"
                            className="mt-1 block w-full px-3 py-2 border border-gray-700 bg-gray-800 text-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="title" className="block text-sm font-medium text-gray-300">Parent Topic</label>
                            <input
                            placeholder="The main topic that you'd like to create such as Video Games, Photography, or Cooking"
                            type="text"
                            name="title"
                            id="title"
                            className="mt-1 block w-full px-3 py-2 border border-gray-700 bg-gray-800 text-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>
                      
                        <div className="text-right">
                            <button type="submit" className="px-4 py-1 font-bold bg-blue-500 text-white rounded-full hover:bg-blue-700">
                                Post
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}