import React from "react";

export default function Footer() {
  return (
    <div className="footer w-full bg-dark px-4 border-t-1 justify-center flex items-center">
      <div className="max-w-7xl">
        <div className="w-full py-2 border-bottom mb-2">
          <h1 className="font-bold text-gray-300">Contact Us</h1>
        </div>

        <div className="lg:flex lg:flex-row-reverse w-full items-center justify-center">
          <div className="grid grid-cols-2 gap-2 text-center justify-center md:border-bottom sm:border-bottom mb-2 pb-2 lg:w-full lg:flex lg:justify-evenly">
            <div className="grid">
              <h1 className="text-gray-100 font-bold mb-2 ">Web Development</h1>
              <a href="" className="text-gray-300 opacity-70 text-sm">
                Front End
              </a>
              <a href="" className="text-gray-300 opacity-70 text-sm">
                Back End
              </a>
            </div>
            <div className="grid ">
              <h1 className="text-gray-100 font-bold mb-2">Photo Editing</h1>
              <a href="" className="text-gray-300 opacity-70 text-sm">
                Adobe Photoshop
              </a>
              <a href="" className="text-gray-300 opacity-70 text-sm">
                Adobe Illustrator
              </a>
            </div>
            <div className="grid">
              <h1 className="text-gray-100 font-bold mb-2">Video Editing</h1>
              <a href="" className="text-gray-300 opacity-70 text-sm">
                Primiere Pro
              </a>
              <a href="" className="text-gray-300 opacity-70 text-sm">
                Capcut
              </a>
            </div>
            <div className="grid">
              <h1 className="text-gray-100 font-bold mb-2">3D Modeling</h1>
              <a href="" className="text-gray-300 opacity-70 text-sm">
                Blender
              </a>
              <a href="" className="text-gray-300 opacity-70 text-sm">
                Substance Painter
              </a>
            </div>
          </div>
          <div className="px-2 flex justify-center mb-2 lg:w-[50%]">
            <img
              src="pictures/ZENITHLOGOWITHNAME_WHITE.png"
              alt=""
              className=" w-[80%] opacity-70 py-2"
            />
          </div>
        </div>
        <div className="card-container py-2">
          <div className="flex gap-4 justify-center text-sm">
            <a href="#">Home</a>
            <a href="#">Projects</a>
            <a href="#">About Us</a>
            <a href="#">Contact us</a>
          </div>
        </div>
        <div className="pt-2 pb-4">
          <p className="flex justify-center text-xs text-gray-100 opacity-70">
            Copyright 2025 All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}
