import React from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Genres from "../genres";
import axios from "axios";

export default function MyBooks() {
  const { action } = useParams();
  const [title,setTitle] = useState('');
  const [author,setAuthor] = useState('');
  const [addedPhoto, useAddedPhoto] = useState ([]);
  const [photoLink, setPhotoLink] = useState ('');
  const [description,setDescription] = useState('');
  const [genres, setGenres] = useState ([]);
  function inputHeader (text) {
    return (
        <h2 className=" text-2xl mt-4"> {text}</h2>
    )
  }
  function preInput (header) {
    return (
        <>
        {inputHeader(header)}</>
    )
  }
  async function addPhotoLink(ev) {
    ev.preventDefault();
   await axios.post('upload-link-photo/' ,{link:photoLink})
  }
  return (
    <div>
      {action !== "new" && (
        <div className="text-center">
          <Link
            to="/account/mybooks/new"
            className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            Add new book
          </Link>
        </div>
      )}
      {action === "new" && (
        <div>
          <form>
            {preInput ('Title')}
            
            <input type="text" value={title} onChange={ev=>setTitle(ev.target.value)} placeholder="title" />
            {preInput ('Author')}
            
            <input type="text" value={author} onChange={ev=>setAuthor(ev.target.value)} placeholder="author" />
            {preInput('Photos')}
            
            <div className="flex gap-2">
              <input type="text" value={photoLink} onChange={ev=>setPhotoLink(ev.target.value)} placeholder={"Add using a link ... jpg"} />
              <button onClick={addPhotoLink} className="bg-gray-200 px-4 rounded-3xl">
                Add&nbsp;photo
              </button>
            </div>
            <div className="mt-2 grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
              <button className=" flex item-center justify-center gap-1 border bg-transparent rounded-2xl p-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 mb-4"
                  
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                  />
                </svg>
                Upload
              </button>
            </div>
            <h2 className=" text-2xl mt-4"> Description</h2>
            <p className="text-gray-500 text-sm">Share your feelings about this book</p>
            <textarea value={description} onChange={ev=> setDescription(ev.target.value)}/>
            <h2 className=" text-2xl mt-4"> Pages</h2>
            <input type="number" placeholder="0"></input>
            <br></br>
            <h2 className=" text-2xl mt-4"> Price</h2>
            <input type="number" placeholder="0" step="0.01"></input>
            <br></br>
            <h2 className=" text-2xl mt-4"> Genres</h2>
            <p className="text-gray-500 text-sm">Choose the genre of your book</p>
            <div className="grid mt-2 gap-2 grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
                <Genres selected={genres} onChange={setGenres} />
                <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                    <input type="checkbox" name="" id="" />
                    <span>Mystery</span>
                </label>
                <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                    <input type="checkbox" name="" id="" />
                    <span>Crime</span>
                </label>
                <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer" >
                    <input type="checkbox" name="" id="" />
                    <span>Thriller</span>
                </label>
                <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                    <input type="checkbox" name="" id="" />
                    <span>Detective</span>
                </label>
                <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                    <input type="checkbox" name="" id="" />
                    <span>Horror</span>
                </label>
                <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer" >
                    <input type="checkbox" name="" id="" />
                    <span>Science</span>
                </label>
                <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer" >
                    <input type="checkbox" name="" id="" />
                    <span>Fantasy</span>
                </label>
                <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                    <input type="checkbox" name="" id="" />
                    <span>Romance</span>
                </label>
                <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                    <input type="checkbox" name="" id="" />
                    <span>Adventure</span>
                </label>
                <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                    <input type="checkbox" name="" id="" />
                    <span>historical Fiction</span>
                </label>
                <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                    <input type="checkbox" name="" id="" />
                    <span>Drama</span>
                </label>
                <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                    <input type="checkbox" name="" id="" />
                    <span>Comedy</span>
                </label>
                <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                    <input type="checkbox" name="" id="" />
                    <span>Action</span>
                </label>
                <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                    <input type="checkbox" name="" id="" />
                    <span>Biography</span>
                </label>
                <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                    <input type="checkbox" name="" id="" />
                    <span>Self-help</span>
                </label>
                <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                    <input type="checkbox" name="" id="" />
                    <span>Satire</span>
                </label>
                <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                    <input type="checkbox" name="" id="" />
                    <span>Poetry</span>
                </label>
                <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                    <input type="checkbox" name="" id="" />
                    <span>Graphic Novel</span>
                </label>

            </div>
            <button className="primary my-4">Save</button>
          </form>
        </div>
      )}
    </div>
  )
}
