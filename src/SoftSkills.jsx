import React from "react";

export default function SoftSkills() {
  return (
    <div className="lg:p-2 lg:bg-gradient-to-t to-blue-950  grid justify-center items-center">
      <div className="relative lg:px-6 p-2 grid bg-gradient-to-b to-blue-950 overflow-hidden justify-center items-center text-left max-w-7xl lg:bg-none">
        <div className="p-2 bg-blue-950 rounded-sm mt-2 lg:mt-0 max-w-7xl mb-2 shadow-xl">
          <h1 className="text-xl font-bold text-shadow">Soft Skills</h1>
        </div>

        <div className="w-full h-auto mt-3 grid lg:grid-cols-3 lg:gap-2">
          {/* card */}
          <div className=" gap-2 w-full mb-3 px-4 py-8 rounded-xl card lg:h-full">
            <div className="grid gap-2 p-2 card-container">
              <h1 className="text-amber-300 font-bold text-xl ">
                Problem-Solving
              </h1>
              <p className="text-sm text-blue-100 text-justify">
                Thrive on tackling challenges with a logical and analytical
                approach, breaking down complex problems into manageable parts
                and finding creative, efficient solutions. My problem-solving
                skills help ensure smooth project workflows.
              </p>
              <h1 className="text-amber-300 font-bold text-xl ">
                Adaptability
              </h1>
              <p className="text-sm text-blue-100 text-justify">
                Adapt to new technologies and environments, embracing change
                with a positive attitude. My flexibility allows me to stay
                productive and meet evolving project demands, even when faced
                with unfamiliar challenges.
              </p>
            </div>
            <div className="w-full flex justify-center">
              <img src="pictures/2.png" alt="" className="card-logo " />
            </div>
          </div>
          {/* card */}
          <div className=" gap-2 w-full mb-3 px-4 py-8 rounded-xl card lg:h-full">
            <div className="grid gap-2 p-2 card-container">
              <h1 className="text-amber-300 font-bold text-xl ">
                Communication
              </h1>
              <p className="text-sm text-blue-100 text-justify">
                Whether written or verbal, I convey ideas concisely and listen
                actively, ensuring mutual understanding. I’m skilled at
                tailoring my communication to suit different audiences and
                contexts.
              </p>
              <h1 className="text-amber-300 font-bold text-xl ">
                Teamwork & Collaboration
              </h1>
              <p className="text-sm text-blue-100 text-justify">
                I collaborate effectively with teams, leveraging my strengths
                while respecting others. I value clear communication, trust, and
                mutual support, which I believe are key to achieving shared
                goals and driving project success.
              </p>
            </div>
            <div className="w-full flex justify-center">
              <img src="pictures/3.png" alt="" className="card-logo" />
            </div>
          </div>
          {/* card */}
          <div className=" gap-2 w-full px-4 py-8 rounded-xl card lg:h-full">
            <div className="grid gap-2 p-2 card-container">
              <h1 className="text-amber-300 font-bold text-xl ">Creativity</h1>
              <p className="text-sm text-blue-100 text-justify">
                Fresh ideas and innovative solutions to the table, approaching
                challenges from different perspectives. My creativity helps
                improve processes, develop new strategies, and push the
                boundaries of conventional thinking.
              </p>
              <h1 className="text-amber-300 font-bold text-xl ">
                Time Management
              </h1>
              <p className="text-sm text-blue-100 text-justify">
                I excel in managing multiple tasks and deadlines with strong
                organizational skills. Prioritizing effectively, I stay focused
                and maintain productivity while delivering high-quality results
                on time.
              </p>
            </div>
            <div className="w-full flex justify-center">
              <img src="pictures/4.png" alt="" className="card-logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
