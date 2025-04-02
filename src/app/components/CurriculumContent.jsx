import React from "react";
import Image from "next/image";
import { MessageSquare, Book, BarChart2, HelpCircle } from "react-feather";
import ReactPlayer from "react-player/lazy";
import { Link as ScrollLink, Element } from "react-scroll";


function CurriculumContent() {
  const [isAskOpen, setIsAskOpen] = React.useState(false);
  const [isLeaderboardOpen, setIsLeaderboardOpen] = React.useState(false);
  const [isPlay, setIsPlay] = React.useState(false);


  return (
    <div className="w-full flex flex-col justify-center items-start ">
      <div id="course-path" className="text-gray-800">
        Home &gt; Courses &gt; Course Details
      </div>
      <div id="video-title" className="text-3xl font-bold py-4 ">
        Starting SEO at your Home
      </div>
      <div className={"w-full h-80 md:h-[360px] lg:h-[480px] xl:h-[540px] 2xl:h-[600px] rounded-lg z-50 overflow-hidden " + (isPlay? "sticky top-2" : "" )}>
        <ReactPlayer
          url="https://youtu.be/Ff-Wz-rEb0U?si=NpzfFpzaNaATJaOs"
          width="100%"
          height="100%"
          light={true}
          playing={true}
          onPlay={() => setIsPlay(true)}
          onPause={() => setIsPlay(false)}
          onEnded={() => setIsPlay(false)}
          controls={true}
        />  
      </div>
      <div className="flex justify-between items-center w-52 py-4">
        <ScrollLink
          to="material"
          smooth={true}
          duration={500}
          className="shadow shadow-gray-700 text-gray-500 rounded-full p-2.5 w-10 h-10 cursor-pointer hover:bg-gray-200 active:bg-gray-300 transition"
        >
          <Book className="w-5 h-5" />
        </ScrollLink>
        <ScrollLink
          to="comments"
          smooth={true}
          duration={500}
          className="shadow-sm shadow-gray-700 text-gray-500 rounded-full p-2.5 w-10 h-10 cursor-pointer hover:bg-gray-200 active:bg-gray-300 transition"
        >
          <MessageSquare className="w-5 h-5" />
        </ScrollLink>
        <button
          id="ask-question"
          onClick={() => {setIsAskOpen(true); setIsPlay(false)}}
          className="shadow shadow-gray-700 text-gray-500 rounded-full p-2.5 w-10 h-10 cursor-pointer hover:bg-gray-200 active:bg-gray-300 transition"
        >
          <HelpCircle className="w-5 h-5" />
        </button>
        {/* ////////////////////      Pop up for Ask Question          /////////////////////// */}
        {isAskOpen && (
          <div className=" fixed inset-0 bg-black/70 z-50  flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg opacity-100 ">
              <textarea
                className=" w-full border-2 border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500"
                placeholder="Ask a question"
              ></textarea>
              <button
                className="py-3 px-5 bg-emerald-400 text-white text-xl rounded-lg mt-4 cursor pointer hover:bg-emerald-500 active:bg-emerald-600 transition"
                onClick={() => setIsAskOpen(false)}
              >
                Submit
              </button>
            </div>
          </div>
        )}
        {/* /////////////////////////////////////////////// */}
        <button
          id="leaderboard"
          onClick={() => {setIsLeaderboardOpen(true); setIsPlay(false)}}
          className="shadow shadow-gray-700 text-gray-500 rounded-full p-2.5 w-10 h-10 cursor-pointer hover:bg-gray-200 active:bg-gray-300 transition"
        >
          <BarChart2 className="w-5 h-5" />
        </button>
        {/* /////////////////////////////////////////////// Pop up for Leaderboard ////////// */}
        {isLeaderboardOpen && (
          <div
            onClick={() => setIsLeaderboardOpen(false)}
            className="text-blue-900 fixed inset-0 bg-black/70 z-50  flex items-center justify-center"
          >
            <div className="flex flex-col justify-between items-center bg-white p-6 gap-5 rounded-lg w-full md:w-xl ">
              <div className="flex flex-col justify-center items-center w-full">
                <p className="text-lg ">Course Name Shown Here</p>
                <p className="text-lg font-bold">Leaderboard</p>
              </div>
              <div className="w-full flex justify-between items-center gap-4 bg-[#F5F9FA] p-5 rounded-lg">
                <p className="w-96 text-xl">
                  عظيم يا صديقي.. أداءك في الكورس ده أفضل من 60% من باقي
                  الطلبة.. كمّل عايز أشوف اسمك في الليدر بورد هنا
                </p>
                <span className="text-4xl md:text-5xl font-bold">💪</span>
              </div>
              <div className="bg-[#F5F9FA] p-5 rounded-lg flex flex-col gap-4 w-full">
                <div className="bg-white w-full h-14 rounded-md"></div>
                <div className="bg-white w-full h-14 rounded-md"></div>
                <div className="bg-white w-full h-14 rounded-md"></div>
                <div className="bg-white w-full h-14 rounded-md"></div>
                <div className="bg-white w-full h-14 rounded-md"></div>
                <div className="bg-white w-full h-14 rounded-md"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="w-full ">
        <Element name="material">
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
        </Element>
      </div>
    </div>
  );
}

export default CurriculumContent;
