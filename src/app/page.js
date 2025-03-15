"use client"
import Image from "next/image";
import CurriculumContent from "./components/CurriculumContent.jsx";
import Topics from "./components/Topics.jsx";
export default function Home() {
  return (
    <div className="p-8 ">
      <div className="flex flex-col md:flex-row gap-6">
      <CurriculumContent />
      <Topics />
      </div>
    </div>
  );
}
