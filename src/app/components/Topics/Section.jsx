import React from "react";
import { Lock, FileText, Plus, Minus } from "react-feather";
import { Link as PDFlink } from "@react-pdf/renderer";
import Exam from "./Exam";

function Section() {
  const [hideButton, setHideButton] = React.useState(
    <Minus className="w-5 h-5" />
  );
  const [isVisible, setIsVisible] = React.useState(true);
  const [hide, setHide] = React.useState("");
  function handleHide() {
    if (hide === "hidden") {
      setHide("");
      setHideButton(<Minus className="w-5 h-5" />);
      setIsVisible(true);
    } else {
      setHide("hidden");
      setHideButton(<Plus className="w-5 h-5" />);
      setIsVisible(false);
    }
  }
  const [isOverViewOpen, setIsOverViewOpen] = React.useState(false);
  const fileUrl = "/MahmoudEssam.pdf";
  const [isExamOpen, setIsExamOpen] = React.useState(false);
  return (
    <div className="text-lg text-gray-700 border-solid border border-gray-300 rounded-sm pb-12 p-8 mt-10">
      <div className="">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold pb-4 text-black">Week 1-4</h1>
          <button
            onClick={handleHide}
            className="transition-all duration-500 active:rotate-360"
          >
            {hideButton}
          </button>
        </div>
        <div
          className={`${hide} transition-all duration-700 ease-in-out ${
            isVisible ? "opacity-100" : "opacity-0"
          } border-b border-solid border-gray-400 pb-6`}
        >
          <p className="text-gray-500 text-lg pb">
            Advanced story telling techniques for writing:
          </p>
          <p className="text-gray-500 text-lg pb">
            Personas, Character & plots
          </p>
        </div>
      </div>
      <div
        className={`transition-all duration-700 ease-in-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className={hide}>
          <div className="flex justify-between items-center py-6 border-b border-solid border-gray-400">
            <p className="max-w-4/5 flex items-center">
              <FileText className="w-5 h-5 mr-2" /> Introduction
            </p>
            <Lock className="w-5 h-5 text-2xl" />
          </div>
          <div className="flex justify-between items-center py-6 border-b border-solid border-gray-400">
            <p className="max-w-4/5 flex items-center">
              <FileText className="w-5 h-5 mr-2" />
              Course OverView
            </p>
            <Lock className="w-5 h-5 text-2xl" />
          </div>
          <div
            onClick={() => setIsOverViewOpen(true)}
            className="flex justify-between items-center py-6 border-b border-solid border-gray-400 hover:bg-gray-100 active:bg-gray-200 cursor-pointer"
          >
            <p className="max-w-4/5 flex items-center">
              <FileText className="w-5 h-5 mr-2" />
              Course OverView
            </p>
            <span className="bg-emerald-50 text-emerald-500 px-3 py-1.5 rounded-md  text-sm">
              0 QUESTION
            </span>
            <span className="bg-rose-50 text-red-500 px-3 py-1.5 rounded-md text-sm ">
              10 MINUTES
            </span>
          </div>

          {isOverViewOpen && (
            <div
              onDoubleClick={() => setIsOverViewOpen(false)}
              className="text-blue-900 fixed inset-0 bg-black/70 z-50  flex items-center justify-center"
            >
              <iframe src="https://docs.google.com/document/d/1ZB0Pm3qteEzj7nXhV72FUPtVMoyZyXxoXWXjnl7ecUM/edit?usp=sharing" width="100%" height="600px" 
                className=" w-8/12 h-full"
              ></iframe>

            </div>
          )}
          <div className="flex justify-between items-center py-6 border-b border-solid border-gray-400">
            <p className="max-w-4/5 flex items-center">
              <FileText className="w-5 h-5 mr-2" />
              Course Exercise / Reference Files
            </p>
            <Lock className="w-5 h-5 text-2xl" />
          </div>
          <div className="flex justify-between items-center py-6 border-b border-solid border-gray-400">
            <p className="max-w-4/5 flex items-center">
              <FileText className="w-5 h-5 mr-2" />
              Code Editor Installation ( Optional If You Have One )
            </p>
            <Lock className="w-5 h-5 text-2xl" />
          </div>
          <div
            onClick={() => setIsExamOpen(true)}
            className="flex justify-between items-center py-6 border-b border-solid border-gray-400 cursor-pointer  hover:bg-gray-100 active:bg-gray-200 "
          >
            <p className="max-w-4/5 flex items-center">
              <FileText className="w-5 h-5 mr-2" />
              Embedding PHP in HTML
            </p>
            <Lock className="w-5 h-5 text-2xl" />
          </div>
          {isExamOpen && (
            <Exam  setIsExamOpen={setIsExamOpen}/>
          )}
        </div>
      </div>
    </div>
  );
}

export default Section;
