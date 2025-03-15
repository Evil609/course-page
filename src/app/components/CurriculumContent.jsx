import React from "react";
import Image from "next/image";
import { MessageSquare , Book , BarChart2 , HelpCircle } from "react-feather";
function CurriculumContent() {
  return (
    <div className="w-full md:w-2/3 xl:w-3/5 flex flex-col justify-center items-start">
      <div id="course-path" className="text-gray-800">
        Home &gt; Courses &gt; Course Details
      </div>
      <div id="video-title" className="text-3xl font-bold py-4 ">
        Starting SEO at your Home
      </div>
      <div className="w-full">
        <video
          id="video-player"
          className="w-full h-auto"
          controlsList="nodownload"
          poster="/cover.jpg"
        >
          <source
            src="https://www.w3schools.com/tags/movie.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="flex justify-between items-center w-52 py-4">
        <button className="shadow shadow-gray-700 text-gray-500 rounded-full p-2.5 w-10 h-10 cursor-pointer hover:bg-gray-200 active:bg-gray-300 transition">
          <Book className="w-5 h-5" />
        </button>
        <button className="shadow-sm shadow-gray-700 text-gray-500 rounded-full p-2.5 w-10 h-10 cursor-pointer hover:bg-gray-200 active:bg-gray-300 transition">
          <MessageSquare className="w-5 h-5" />
        </button>
        <button className="shadow shadow-gray-700 text-gray-500 rounded-full p-2.5 w-10 h-10 cursor-pointer hover:bg-gray-200 active:bg-gray-300 transition">
          <HelpCircle className="w-5 h-5" />
        </button>
        <button className="shadow shadow-gray-700 text-gray-500 rounded-full p-2.5 w-10 h-10 cursor-pointer hover:bg-gray-200 active:bg-gray-300 transition">
          <BarChart2 className="w-5 h-5" />
        </button>
      </div>
      <div className="w-full ">
        <p className="text-black text-3xl font-bold py-4">Course Material</p>
        <div className="flex flex-col justify-between bg-white shadow-md px-6 py-3 rounded-2xl w-full md:w-md">
          <div className="flex justify-between items-center py-2 text-xl text-gray-600">
            <p>Instrurctor:</p> 
            <p>Ali Shahin</p> 
          </div>
          <div className="flex justify-between items-center py-2 text-xl text-gray-600">
            <p>Duration :</p> 
            <p>4 weeks</p> 
          </div>
          <div className="flex justify-between items-center py-2 text-xl text-gray-600">
            <p>Lessons :</p> 
            <p>8</p> 
          </div>
          <div className="flex justify-between items-center py-2 text-xl text-gray-600">
            <p>Enrolled :</p> 
            <p>65</p> 
          </div>
          <div className="flex justify-between items-center py-2 text-xl text-gray-600">
            <p>Language :</p> 
            <p>Arabic</p> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurriculumContent;
