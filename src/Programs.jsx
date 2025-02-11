import React from "react";

export default function Programs() {
  return (
    <div className="px-10 pb-4 bg-gradient-to-b to-blue-950 lg:bg-gradient-to-t flex flex-col justify-center items-center">
      <div className="max-w-7xl flex flex-col items-center">
        <div className="py-2 w-full border-bottom mb-3 lg:w-[70%]">
          <h1 className="text-md font-bold">
            Programming Languages & Applications
          </h1>
        </div>
        <div className="grid ">
          <div className="flex gap-x-2  justify-center ">
            <img src="pictures/html-5.png" alt="" className="programs " />
            <img src="pictures/css.png" alt="" className="programs" />
            <img src="pictures/js.png" alt="" className="programs" />
            <img src="pictures/php.png" alt="" className="programs" />
            <img src="pictures/msql.png" alt="" className="programs" />
            <img src="pictures/bootstrap.png" alt="" className="programs" />
            <img src="pictures/tailwind.png" alt="" className="programs" />
          </div>
          <div className="flex gap-x-2  justify-center ">
            <img src="pictures/react.png" alt="" className="programs" />
            <img src="pictures/sp.png" alt="" className="programs" />
            <img src="pictures/ps.png" alt="" className="programs" />
            <img src="pictures/pr.png" alt="" className="programs" />
            <img src="pictures/ai.png" alt="" className="programs" />
            <img src="pictures/blender.png" alt="" className="programs" />
          </div>
        </div>
      </div>
    </div>
  );
}
