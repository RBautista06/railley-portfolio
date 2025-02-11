import { EnvelopeIcon } from "@heroicons/react/24/outline";
import React from "react";

export default function Header() {
  return (
    <div className='flex justify-center bg-gradient-to-b from-blue-950 '>
    <div
      className="relative py-5  sm:grid overflow-hidden justify-center md:px-0 max-w-7xl
    lg:flex lg:px-5 
   "
    >
      <div
        className="absolute z-1 -mt-55 -left-20 rounded-full bg-gradient-to-b from-blue-950 to-blue-800 h-160 w-160 shadow-2xl shadow-blue-950
      
      
      md:left-15 md:-mt-70"
      ></div>

      <div
        className="absolute z-1 mt-120 self-center  rounded-t-full bg-gradient-to-b from-blue-800 to-blue-950 h-70 w-full shadow-2xl shadow-blue-950
      
      
      md:w-160 md:h-160 md:mt-200 md:left-15"
      ></div>

      <div
        className="relative z-2 grid gap-3 p-4 justify-items-center 
      lg:flex-col lg:align-baseline lg:justify-items-start lg:text-left lg:w-[75%]"
      >
        <h1 className="z-2 font-bold text-2xl lg:text-left w-full">
          Hello there I'm
        </h1>
        <h1 className="text-4xl font-bold text-center text-zinc-100 text-shadow lg:text-left w-full">
          Railley Nickolei Vince Bautista
        </h1>
        <p className="text-xl ">
          A Passionate Web Developer, 3D Model Artist, Video Editor, and Photo
          Editor. Bringing creativity and technical expertise to every project.
        </p>
        <button className="flex p-4 h-auto border shadow-md shadow-blue-950 gap-2 rounded-md bg-blue-800 lg:p-2 justify-center items-center lg:px-5">
          Get In Touch
          <EnvelopeIcon className="h-5 self-center" />
        </button>
      </div>
      <div className="relative  h-80 grid justify-items-center ">
        <img src="pictures/webme.png" className="z-2 h-90 me" alt="" />
      </div>
    </div>
    </div>
  );
}
