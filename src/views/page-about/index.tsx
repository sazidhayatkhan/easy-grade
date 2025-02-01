import React from "react";

type Props = {};

const AboutUI = (props: Props) => {
  return (
    <div className="h-[calc(100vh-120px)] md:h-[calc(100vh-100px)] w-[90%] md:w-[60%] mx-auto flex justify-center items-center">
      <div>
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">
          About the App
        </h1>
        <p className="text-base text-center">
          Grading just got easier! Easy Grade simplifies marking and grading for
          Scholastica teachers. Designed to match the school’s official system,
          it ensures accurate grade calculations and effortless final mark
          compilations. Say goodbye to manual errors—let Easy Grade do the work!
          😉
        </p>
      </div>
    </div>
  );
};

export default AboutUI;
