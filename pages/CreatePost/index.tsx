import React, { useState } from "react";
import "./../globals.css";
import Navbar from "./../../components/layout/navbar";
import TopicsForm from "../Topics";
import { WithContext as ReactTags } from 'react-tag-input';

const predefinedTags: any[] = [
  { id: 'NSFW', text: 'NSFW' },
  { id: 'Spoiler', text: 'Spoiler' },
  { id: 'Graphic', text: 'Graphic' },
  // Add more predefined tags as needed
];

export default function CreatePost() {
  const [text, setText] = useState<string>("CreatePost");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleToggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(prevSelectedTags => prevSelectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags(prevSelectedTags => [...prevSelectedTags, tag]);
    }
  };

  const handleTagClick = (tag: string) => {
    handleToggleTag(tag);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log('Selected tags:', selectedTags);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0d0d19]">
      <Navbar session={null} />
      <div className="container rounded-md bg-[#13131f] p-4 shadow-lg md:w-1/2">
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
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Tags
                </label>
                <div className="flex flex-wrap">
                  {predefinedTags.map(tag => (
                    <div
                      key={tag.id}
                      className={`mr-2 mb-2 px-4 py-2 rounded cursor-pointer ${selectedTags.includes(tag.text) ? 'bg-green-500' : 'bg-red-500'}`}
                      onClick={() => handleTagClick(tag.text)}
                    >
                      {tag.text}
                    </div>
                  ))}
                </div>
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
              <div className="flex justify-between w-full">
                <button
                  onClick={() => setText('CreateTopic')}
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
        ) : (
          <TopicsForm setText={setText} />
        )}
      </div>
    </div>
  );
}
