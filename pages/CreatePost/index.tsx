import React from "react"
import "./../globals.css";

// add selector for threads
// add tags
// select a topic

export default function CreatePost() {
    return (
        (
            <div className="bg-[#212630] min-h-screen flex items-center justify-center">
              <div className="container bg-[#161a21] md:w-1/2 p-4 rounded-md shadow-lg">
                <h1 className="text-xl font-bold text-white mb-4">Create a Post</h1>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="title" className="block text-sm font-medium text-gray-300">Title</label>
                            <input
                            type="text"
                            name="title"
                            id="title"
                            className="mt-1 block w-full px-3 py-2 border border-gray-700 bg-gray-800 text-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="content" className="block text-sm font-medium text-gray-300">Content</label>
                            <textarea
                            name="content"
                            id="content"
                            className="mt-1 block w-full px-3 py-2 border border-gray-700 bg-gray-800 text-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            rows={4}
                            ></textarea>
                        </div>
                        <div className="text-right">
                            <button type="submit" className="px-4 py-1 font-bold bg-blue-500 text-white rounded-full hover:bg-blue-700">
                                Post
                            </button>
                        </div>
                    </form>
                </div>
            </div>
          )
    )
}