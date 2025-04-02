import { useState } from "react";
import React from "react";
import { Lock, FileText, Plus, Minus} from "react-feather";
import Section from "./Section";
function Topics() {
  const [progress, setProgress] = useState(60);

  const handleChange = (e) => {
    setProgress(e.target.value);
  };

  return (
    <div className="p-4 w-full md:w-1/3 xl:w-2/5 pt-10">
      <p className="text-3xl font-bold pb-12 md:pb-20">Topics For This Course</p>

      <div className="flex flex-col items-center justify-center w-full bg-gray-100">
        <div className="relative w-full h-2">
          <div className="w-full h-2 bg-gray-500 rounded-lg overflow-hidden relative">
            <div
              className="h-2 bg-green-500 transition-all"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div
            className="absolute bottom-5 w-10 h-10 bg-white rounded-full flex items-center justify-center text-xs font-bold text-blue-900 shadow-md transform -translate-x-1/2 border-4 border-solid border-gray-400"
            style={{ left: `${progress}%` }}
          >
            You
            <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-400"></div>
          </div>
          <div
            className="absolute top-5 text-xs font-bold text-blue-900 transform -translate-x-1/2 "
            style={{ left: `${progress}%` }}
          >
            {`${progress}%`}
          </div>
        </div>
      </div>

      <Section num={1}/>
      <Section num={2} />
      <Section num={3} />

    </div>
  );
}

export default Topics;
