import React from "react";

export default function ShortMessage() {
  return (
    <div className="relative p-2 grid bg-gradient-to-t to-blue-950  lg:bg-gradient-to-b overflow-hidden justify-center text-left w-full lg:px-6">
      <div className="grid align-center justify-center rounded-2xl bg-gray-950 px-8 py-5">
        <div className="w-full border-t-2 text-center py-3 card-container ">
          <h2 className="text-sm font-bold">
            {" "}
            Shape The Future of Web Development
          </h2>
          <br />
          <h1 className="text-xl font-bold text-blue-500">
            Join The Ultimate Web Development Challenge
          </h1>
          <br />
          <p className="text-sm">
            Turn your code into innovation and creativity! Push the boundaries
            of technology and showcase you skills in designing the web of
            tomorrow
          </p>
          <div className="flex gap-2 mt-3 justify-center">
            <a
              href="#"
              className="px-4 py-2 bg-blue-800 rounded-sm text-sm border-1"
            >
              View Projects
            </a>
            <a
              href="#"
              className="px-4 py-2 bg-gray-100 rounded-sm text-sm text-blue-950 border-1 border-blue-800"
            >
              More Information
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
