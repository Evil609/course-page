"use client";
import Image from "next/image";
import CurriculumContent from "./components/CurriculumContent.jsx";
import Comments from "./components/Comments.jsx";
import Topics from "./components/Topics/Topics.jsx";
import { useState , useEffect } from "react";
import { useWindowSize } from "react-use";

export default function Home() {
  const { width } = useWindowSize();
  const [isPc , setIsPc] = useState(true)
  const [render, setRender] = useState()
  
  useEffect(() => {
    if (width < 768) {
      setIsPc(false);
      setRender(
          <div className="flex-1 md:flex-9/12">
            <CurriculumContent />
            <Topics />
            <Comments />
          </div>
        );
    } else {
      setIsPc(true);
      setRender(
        <>
          <div className="flex-1 md:flex-9/12">
        <CurriculumContent />
        <Comments />
        </div>
        <Topics />
        </>
        );
    }
  }, [isPc , width]);

  return (
    <div className="p-2 md:p-4 xl:p-8">
      <div className="flex flex-col md:flex-row gap-2 2xl:gap-4 relative">
        {render}
      </div>
    </div>
  );
}
