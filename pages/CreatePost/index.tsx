import React, { useState } from "react";
import "./../globals.css";
import Navbar from "./../../components/layout/navbar";
import TopicsForm from "../Topics";

// add selector for threads
// add tags
// select a topic

/*

*/

export default function CreatePost() {
  const [text, setText] = useState<string>("CreatePost");

  const changecreation = () => {
    setText("CreateThread");
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#212630]">
      <Navbar session={null} />
      <div className="container rounded-md bg-[#161a21] p-4 shadow-lg md:w-1/2">
        {text === "CreatePost" ? (
          <>
            <h1 className="mb-4 text-xl font-bold text-white">
              Create a New Post
            </h1>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-300"
                >
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-white shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                />
              </div>

              <div>
                <label
                  htmlFor="content"
                  className="block text-sm font-medium text-gray-300"
                >
                  Content
                </label>
                <textarea
                  name="content"
                  id="content"
                  className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-white shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                  rows={4}
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  onClick={changecreation}
                  className="ml-36 mr-36 rounded-full bg-blue-500 px-4 py-1 font-bold text-white hover:bg-blue-700"
                >
                  Create New Topic
                </button>
                <button
                  type="submit"
                  className="ml-36 mr-36 rounded-full bg-blue-500 px-4 py-1 font-bold  text-white hover:bg-blue-700"
                >
                  Post
                </button>
              </div>
            </form>
          </>
        ) : (
          <TopicsForm />
        )}
      </div>
    </div>
  );
}
