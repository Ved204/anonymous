import React from "react";
import "./../globals.css";
import Card from "@/components/home/card";
import Form from "platforms/components/form";
import NavBar from "@/components/layout/navbar";


export default function TopicsForm(setText: any) {
  //

  return (
    <>
      <h1 className="mb-4 text-xl font-bold text-white">Create a New Topic</h1>
      <form className="space-y-4">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-300"
          >
            Topic
          </label>
          <input
            placeholder="The topic you'd like to create under the parent topic such as a specific video game or specific musical artist"
            type="text"
            name="title"
            id="title"
            className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-white shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
          />
        </div>
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-300"
          >
            Parent Topic
          </label>
          <input
            placeholder="The main topic that you'd like to create such as Video Games, Photography, or Cooking"
            type="text"
            name="title"
            id="title"
            className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-white shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
          />
        </div>

        <div className="flex justify-between w-full">
                <button
                  onClick={() => setText('CreatePost')}
                  className="rounded-full bg-blue-500 px-4 py-1 font-bold text-white hover:bg-blue-700"
                >
                  Create New Post
                </button>
                <button
                  type="submit"
                  className="rounded-full bg-blue-500 px-4 py-1 font-bold  text-white hover:bg-blue-700"
                >
                  Post
                </button>
              </div>
      </form>
    </>
  );
}
